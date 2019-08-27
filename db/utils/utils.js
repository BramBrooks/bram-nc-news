exports.formatDates = list => {
  const returnValue = list.map(individualDate => {
    const dateStamp = new Date(individualDate.unixTimestamp * 1000);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const year = dateStamp.getFullYear();

    const month = months[dateStamp.getMonth()];

    const day = days[dateStamp.getDay()];

    const date = dateStamp.getDate().toString();

    let formattedDate = "";
    if (date.length === 2) {
      formattedDate = date;
    } else {
      formattedDate = "0" + date;
    }

    const hours = dateStamp.getHours().toString();
    let formattedHours = "";
    if (hours.length === 2) {
      formattedHours = hours;
    } else {
      formattedHours = "0" + hours;
    }

    const minutes = dateStamp.getMinutes().toString();

    let formattedMinutes = "";
    if (minutes.length === 2) {
      formattedMinutes = minutes;
    } else {
      formattedMinutes = "0" + minutes;
    }

    const seconds = dateStamp.getSeconds().toString();
    let formattedSeconds = "";
    if (seconds.length === 2) {
      formattedSeconds = seconds;
    } else {
      formattedSeconds = "0" + seconds;
    }

    const formattedDateStamp =
      day +
      " " +
      month +
      " " +
      formattedDate +
      " " +
      year +
      " " +
      formattedHours +
      ":" +
      formattedMinutes +
      ":" +
      formattedSeconds;

    return formattedDateStamp;
  });

  return returnValue;
};

// better way of doing this?!?!

exports.makeRefObj = list => {
  const refObj = {};

  list.forEach(obj => {
    const key = obj.title;

    const value = obj.article_id;

    refObj[key] = value;
  });
  return refObj;
};

exports.formatComments = (comments, articleRef) => {
  const returnValue = comments.map(commentObj => {
    const authorName = commentObj.created_by;
    commentObj.author = authorName;
    delete commentObj.created_by;

    const articleIDValue = commentObj.belongs_to;
    commentObj.article_id = articleIDValue;
    delete commentObj.belongs_to;
    return commentObj;
  });

  return returnValue;
};

//  Take an array of comment objects(comments) and a reference object, and return a new array of formatted comments.

// rename created_by property 'author' - DONE
// rename belongs_to property to 'article_id' - DONE

// 'article_id' key value - must be the id corresponding to the original title value provided - WAIT UNTIL SEED BUILT

// convert created_at value into a javascript date object - WAIT UNTIL SEED BUILT

//Q re the below:
// what is the article ref / reference object that's passes as an arg?

// The rest of the comment's properties must be maintained
