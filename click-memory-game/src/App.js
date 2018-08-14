import React from "react";
import friends from "./friends.json";
import View from "./components/FriendCard/View";

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

Shuffle(friends);

const App = () => <View />;

export default App;
