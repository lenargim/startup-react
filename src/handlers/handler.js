import {useEffect, useState} from "react";

const useCheckScreen = (checkWidth = 767) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (width < checkWidth);
}

export default useCheckScreen

export const editorAPIKey = 'l5rotnmgrbhdztp187l6fhozljh66ric8b6wbbel6t10npxs';
