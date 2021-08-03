exports = function(arg){

  var collection = context.services.get("mongodb-atlas").db("participantDb").collection("subscriptions");
  let pivot = new Date() ;

  arg = collection.deleteMany({ $and: [{ deadline: { $lte: pivot} }, { state: { $eq: "Reservation" } }] });

  return {arg: arg};
};