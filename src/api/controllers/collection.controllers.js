const Collection = require("../models/collection.model");

const getCollection = async (req, res) => {
    try {
        const collection = await Collection.find().populate("videogames");
        if(!collection){
            return res.status(404).json({ message: `No Collection  was found! :(` })
        }
        return res.status(200).json(collection)

    } catch (error) {
        return res.status(500).json(error)
    }
};

const getCollectionById = async ()=>{
    try {
        const {id} = req.params;
        const collection = await Collection.findById(id);
        if(!collection){
            return res.status(404).json({ message: `No Collection with ID: ${id} was found! :(` })
        }
        return res.status(200).json(collection);
    } catch (error) {
        return res.status(500).json(error)

    }
}



const postCollection = async (req, res) => {
    try {
        const body = req.body;
        const collection = new Collection(body);

        const createdCollection = await collection.save();
        if(!createdCollection){
            return res.status(500).json({ message: `No Collection   was created! :(` })
        }
        return res.status(200).json(createdCollection)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putCollection = async (req, res) => {
    try {
        const { id } = req.params;
        const putCollection = new Collection(req.body);
        putCollection._id = id;
        const updateCollection = await Collection.findByIdAndUpdate(id, putCollection, { new: true });
        if (!updateCollection) {
            return res.status(404).json({ message: `No Collection with ID: ${id} was found! :(` })
        }
        return res.status(200).json(updateCollection)
    } catch (error) {
        return res.status(500).json(error);
    }
};
const deleteCollection = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCollection = await Collection.findByIdAndDelete(id);
        if (!deleteCollection) {
            return res.status(404).json({ message: `No Collection with ID: ${id} was found! :(` })
        }
        return res.status(200).json(deleteCollection)

    } catch (error) {
        return res.status(500).json(error);

    }
}


const getCollectionByName = async (req, res) => {
    try {
        const { collectionName } = req.params;
        const collection = await Collection.find({ name: collectionName });
        return res.status(200).json(collection)
    } catch {
        return res.status(500).json(error)
    }
}
module.exports = { getCollection, getCollectionById, getCollectionByName, postCollection, putCollection, deleteCollection }