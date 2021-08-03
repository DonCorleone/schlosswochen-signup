exports = async function sumChildsPerState(week) {
  const cluster = context.services.get("mongodb-atlas");
  const participants = cluster.db("participantDb").collection("subscriptions");
  
  const pipeline = [
    { $match: { "week": { $eq: week} } },
    { $project: {
        state: "$state",
        countChilds: { $cond: { if: { $isArray: "$childs" }, then: { $size: "$childs"}, else: 0} }
      }
    },
    { $group: 
      {
        "_id": {"state":"$state"},
        "sumPerStateAndWeek":{$sum: "$countChilds" }
      }
    }, 
    { $project: 
      {
        "_id": 0,
        "state": "$_id.state",
        "sumPerStateAndWeek":1
      }
    }
  ];
  
  

  return participants.aggregate(pipeline).toArray();
};