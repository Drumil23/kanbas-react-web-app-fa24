import "./Classes.css";


export default function Classes() {
    const color = "yellow";
    const dangerous = true;
  return (
    <div>
      <h1 className={`wd-fg-black wd-bg-${color} wd-padding-10px`}>Classes</h1>
      <p className={`wd-fg-black wd-bg-blue wd-padding-10px`}>This is a blue box</p>
      <p className={`wd-fg-black wd-bg-green wd-padding-10px`}>This is a green box</p>
      <p className={`wd-fg-black ${dangerous ? "wd-bg-red" : "wd-bg-green"} wd-padding-10px`}>This is a red box</p>
    </div>
  );
}
