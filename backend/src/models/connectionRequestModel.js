const mongoose = require("mongoose")

const connectionRequestSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    toUserId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: {
            values: ["ignored","accepted","rejected","interested"],
            message: '{VALUE} is not supported'
        }
    }
},{
    timestamps: true
});

connectionRequestSchema.index({fromUserId: 1, toUserId: 1})
//a user cannot send a connection request to himself
connectionRequestSchema.pre("save", function (next) {
    if(this?.fromUserId.equals(this?.toUserId)){
        throw new Error("You cannot send connection request to yourself")
    }
    next();
})

const ConnectionRequestModel = new mongoose.model("ConnectionRequest",connectionRequestSchema);

module.exports = ConnectionRequestModel