if (action.type === "loaded") {
  return { ...state, loading: false };
}
if (action.type === "loading") {
  return { ...state, loading: true };
}
if (action.type === "toggleGodMode") {
  return { ...state, godMode: !state.godMode };
}
if (action.type === "setUsername") {
  localStorage.setItem("username", action.payload);
  return { ...state, username: action.payload };
}
if (action.type === "setLists") {
  return { ...state, lists: action.payload };
}
if (action.type === "addComment") {
  const newLists = state.lists.map((list) => {
    //Deep clone
    let newList = JSON.parse(JSON.stringify(list));
    if (newList.id === action.payload.list) {
      newList.comments = newList.comments.concat(action.payload);
    }
    return newList;
  });
  return { ...state, lists: newLists };
}
if (action.type === "deleteComment") {
  const nextLists = state.lists.map((list) => {
    let newList = JSON.parse(JSON.stringify(list));
    newList.comments = newList.comments.filter(
      (com) => com.id !== action.payload.id
    );
    return newList;
  });
  return { ...state, lists: nextLists };
}
if (action.type === "addSubComment") {
  const nextLists = state.lists.map((list) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.comments = newList.comments.map((com) => {
      if (com.id === action.payload.scdata.parentid) {
        com.comments = com.comments.concat(action.payload.scdata);
      }
      return com;
    });
    return newList;
  });
  return { ...state, lists: nextLists };
}
if (action.type === "deleteSubComment") {
  const { scID, coID } = action.payload;
  const nextLists = state.lists.map((list) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.comments = newList.comments.map((comment) => {
      if (comment.id === coID) {
        comment.comments = comment.comments.filter(
          (subcomment) => subcomment.id !== scID
        );
      }
      return comment;
    });
    return newList;
  });
  return { ...state, lists: nextLists };
}
