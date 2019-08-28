exports.formatDates = articles => {
  const formattedData = articles.map(articleObj => {
    const copyObj = { ...articleObj };

    const dateStamp = new Date(articleObj.created_at);

    copyObj.created_at = dateStamp;

    return copyObj;
  });

  return formattedData;
};

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
  const formattedComments = comments.map(commentObj => {
    const copyObj = { ...commentObj };

    // created_by changed to author
    const authorToAdd = copyObj.created_by;
    copyObj.author = authorToAdd;
    delete copyObj.created_by;

    // date sorted:
    const dateToChange = copyObj.created_at;
    copyObj.created_at = new Date(dateToChange);

    // convert belongs to key value pair to article_id pair

    const commentThead = copyObj.belongs_to;
    copyObj.article_id = articleRef[commentThead];
    delete copyObj.belongs_to;

    return copyObj;
  });

  return formattedComments;
};
