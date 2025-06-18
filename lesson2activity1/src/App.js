import Student from "./Student";

function EmojiOne() {
  return <p>😃 I am happy face!</p>;
}
function EmojiTwo() {
  return <p>😢 I am sad face!</p>;
}

function App() {
  return (
    <div>
     <h2>Welcome to the world of Emojis.</h2>
     <EmojiOne/>
     <EmojiTwo/>
     <Student name="Zuhair" grade="7"/>
     <Student name="Adyan" grade="7"/>
    </div>
  );
}

export default App;
