
// Lesson: {completed:true, time_completed: datetime}
// Assessment: {completed:true, time_completed: datetime, passed:true, percantage: 80, medals:['gold','lobster']}
// Practical: {completed:true, time_completed: datetime, passed:false, percentage: 40}

var ex = {
  "course_id": "549808344fee142b87478dd5",
  "picture_uri": "coffee_course_main.jpg",
  "state": "started",
  "title": "Coffee Mini",
  "type": "course",
  "children": [
    {
      "course_node_id": "549808344fee142b87478dd9",
      "title": "Level 1  The Basics",
      "type": "group",
      "group_type": "level",
      "parent_id": "549808344fee142b87478dd5",
      "children": [
        {
          "course_node_id": "549808344fee142b87478dde",
          "title": "Grinding",
          "type": "group",
          "group_type": "subject",
          "parent_id": "549808344fee142b87478dd9",
          "children": [
            {
              "course_node_id": "549808344fee142b87478de7",
              "title": "Introduction and Understanding",
              "type": "video",
              "parent_id": "549808344fee142b87478dde",
              "state": "completed",
              "time_completed": "datetime"
            },
            {
              "course_node_id": "549808344fee142b87478de8",
              "title": "Different Types of Grinders",
              "type": "video",
              "parent_id": "549808344fee142b87478dde",
              "state": "started"
            },
            {
              "course_node_id": "549808344fee142b87478df0",
              "title": "Grinding",
              "type": "assessment",
              "parent_id": "549808344fee142b87478dde",
              "state": "completed",
              "time_completed": "datetime", 
              "passed":true, 
              "percantage": 80, 
              "medals":["gold","lobster"]
            },
            {
              "course_node_id": "549808344fee142b87478df4",
              "title": "Grinding",
              "type": "practical",
              "parent_id": "549808344fee142b87478dde",
              "state": "completed",
              "time_completed": "datetime", 
              "passed":true, 
              "percantage": 80
            }
          ]
        }
      ]
    }
  ]
};