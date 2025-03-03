import { Image } from "@react-three/drei";
// import { useThree, Group } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

import * as THREE from "three";

const Booksimage = ()=> {
  const {width,height} = useThree((state) => state.viewport);

  // 画像縦横比
  const aspectRatios = {
    HadTheSameDreamAgain: 1600 / 2285,
    ComradeGirlsHitTheTarget: 1295 / 1867,
    NaruseGoesToTakeTheWorld: 680 / 1000,
    T3000LeftToLive: 700 / 1000,
    ArroganceAndGoodness: 710 / 1000,
    TheMostTransparentStoryInTheWorld: 1461 / 2082,
    Novel : 640 / 922,
    YouAreLikeStar : 686 / 1000,
    IntoTheWhiteNight : 552 / 800,
    N : 703 / 1000
  };

  const baseX = 0;
  const baseY = 0

  const calculateScaleRatio = (widthPercentage: number, maxWidth: number, Ratio: number):[number, number, number] => {
    const scaleWidth = Math.min(window.innerWidth * widthPercentage, maxWidth);
    const scaleHeight = scaleWidth / Ratio;
    return [scaleWidth, scaleHeight, 1];
  };

  const images = [
    {
      url: "/homeImages/NaruseGoesToTakeTheWorld.jpg",
      scale: calculateScaleRatio(0.0025, 1.7, aspectRatios.NaruseGoesToTakeTheWorld),
      position:new THREE.Vector3( baseX + width * 0.09, baseY - height *0.005, 2.5),
    },
    {
      url: "/homeImages/HadTheSameDreamAgain.jpg",
      scale: calculateScaleRatio(0.0015, 0.9, aspectRatios.HadTheSameDreamAgain),
      position:new THREE.Vector3(baseX - width * 0.085, baseY - height *0.2, 3)
    },
    {
      url: "/homeImages/3000CharactersLeftToLive.jpg",
      scale: calculateScaleRatio(0.0035, 2, aspectRatios.T3000LeftToLive),
      position:new THREE.Vector3(baseX + width * 0.15, baseY -height * 0.35, 2)
    },
    {
      url: "/homeImages/ComradeGirlsHitTheTarget.jpg",
      scale: calculateScaleRatio(0.0025, 1.5, aspectRatios.ComradeGirlsHitTheTarget),
      position:new THREE.Vector3(baseX + width * 0.02, baseY - height * 0.6, 2.7)
    },
    {
      url: "/homeImages/ArroganceAndGoodness.jpg",
      scale: calculateScaleRatio(0.002, 2, aspectRatios.ArroganceAndGoodness),
      position:new THREE.Vector3(baseX - width * 0.19, baseY - height * 0.85, 1.5)
    },
    {
      url: "/homeImages/Novel.jpg",
      scale: calculateScaleRatio(0.002, 1.5, aspectRatios.Novel),
      position:new THREE.Vector3(baseX + width * 0.07, baseY - height * 1.2, 3)
    },
    {
      url: "/homeImages/TheMostTransparentStoryInTheWorld.jpg",
      scale: calculateScaleRatio(0.0023, 1.8, aspectRatios.TheMostTransparentStoryInTheWorld),
      position:new THREE.Vector3(baseX + width * 0.2, baseY - height * 1.5, 2)
    },
    {
      url: "/homeImages/YouAreLikeStar.jpg",
      scale: calculateScaleRatio(0.0023, 1.4, aspectRatios.YouAreLikeStar),
      position:new THREE.Vector3(baseX - width * 0.17, baseY - height * 2, 2.2)
    },
    {
      url: "/homeImages/IntoTheWhiteNight.jpg",
      scale: calculateScaleRatio(0.0023, 2, aspectRatios.IntoTheWhiteNight),
      position:new THREE.Vector3(baseX + width * 0.25, baseY - height *2.4, 1)
    },
    {
      url: "/homeImages/N.jpg",
      scale: calculateScaleRatio(0.0023, 1.7, aspectRatios.N),
      position:new THREE.Vector3(baseX - width * 0.13, baseY - height *2.8, 2.5)
    },
    
  ]
  return (
    <>
      {images.map((img, index) => (
        <Image key={index} url={img.url} scale={[img.scale[0], img.scale[1]]} position={img.position} />
      ))}
    </>
  )
}

export default Booksimage;



