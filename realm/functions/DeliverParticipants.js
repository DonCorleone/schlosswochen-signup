exports = async function(arg){
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    
      */
    var collection = context.services.get("mongodb-atlas").db("participantDb").collection("participants");

    await collection.find({ participant_id: { $regex: arg }}).toArray().then((docs) => {
      docs.forEach(doc => {
        console.log(JSON.stringify(doc._id));
      })

    });
  /*
    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  return {arg: arg};
};