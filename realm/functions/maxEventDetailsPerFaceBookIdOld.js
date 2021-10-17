exports = async function maxEventDatesPerFacebookPixelId() {
  const cluster = context.services.get("mongodb-atlas");
  const eventDetails = cluster.db("eventDb").collection("EventDetails");
  
  const pipeline = [
    {    $match: {
        start: {
            $lte: new Date()
        },
        $or: [{
                googleAnalyticsTracker: {
                    $eq: "Premiere"
                }
            },
            {
                googleAnalyticsTracker: {
                    $eq: "Premiere|Tournee"
                }
            }
        ]
    }
},  {$group: {
      _id: "$facebookPixelId",
      start: { $max: "$start" },
      eventDetail: { "$first": "$$CURRENT" }
    }}, {
    $sort: {
        start: -1
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