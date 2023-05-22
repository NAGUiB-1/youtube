import { useState, useEffect, useRef } from "react";
import { ProjectState } from "../projectContext";
import Sidebar from "../components/Sidebar";
import ResultComponent from "../components/ResultComponent";
import { fetchData } from "../fetchData";
import Loader from "../components/Loader";
function Feed() {
  let ref = useRef(null);
  let { selected } = ProjectState();
  let [videos, setVideos] = useState([]);
  let [next, setNext] = useState("");
  let [data, setData] = useState([]);
  let [hasMore, setHasMore] = useState(true);

  function onIntersection(entires) {
    const element = entires[0];
    console.log(element);
    if (element.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }

  function fetchMoreItems() {
    setNext(data.cursorNext);
    fetchData(`search/?q=${selected}&cursor=${next}`).then((data) => {
      if (data.contents.length == 0) {
        setHasMore(false);
      }
      setVideos((prevVideos) => [...prevVideos, ...data.contents]);
      setData(data);
    });
  }

  useEffect(() => {
    
    if (videos.length == 0) {
      fetchData(`search/?q=${selected}`).then((data) => {
        setVideos(data.contents);
        setData(data);
      });
    }
    const observer = new IntersectionObserver(onIntersection);

    if (observer && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
   // setVideos([]);
  }, [ videos]);
useEffect(()=>{
  setVideos([]);
},[selected])
  return (
    <div className="flex flex-col sm:flex-row sm:h-screen  sm:h-[calc(100vh-2.5rem)]">
      <Sidebar />
      <div className="sm:w-full sm:h-[calc(100vh-2.5rem)] sm:overflow-y-scroll">
        {videos.length ? (
          <>
            <ResultComponent videos={videos} title={selected} />
            <div className=" text-white" ref={ref}>
              Loadmore
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Feed;
