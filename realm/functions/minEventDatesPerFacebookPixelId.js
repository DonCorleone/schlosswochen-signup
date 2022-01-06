exports = async function minEventDatesPerFacebookPixelId() {
  const cluster = context.services.get("mongodb-atlas");
  const eventDetails = cluster.db("eventDb").collection("EventDetails");
  
  const pipeline = [
    {$match: {
      start: { $gte: new Date()} 
    }}, {$group: {
      _id: "$facebookPixelId",
      start: { $min: "$start" },
      eventDetail: { "$first": "$$CURRENT" }
    }}, {
    $sort: {
        start: 1
    }
}, {
    $project: {
        _id: 0,
        eventDetail: 1
    }
}
  ];

  return eventDetails.aggregate(pipeline).toArray();
};