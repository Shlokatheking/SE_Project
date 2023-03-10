/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import Image202303012246016Image from 'src/assets/images/StartupLandingPage_image_2023_03_01_224601648_removebg_preview_2.png';
import { styled } from '@mui/material/styles';
import Homepage from './Homepage';
import Navbar from './Navbar';


const StartUpLandingPage1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `700px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Page2 = styled('div')(({ theme }) => ({
  width: `1440px`,
  height: `700px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Navbar1 = styled(Navbar)(({ theme }) => ({
  width: `1440px`,
  height: `64px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Image202303012246016 = styled('img')({
  height: `54px`,
  width: `327px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `-1px`,
  top: `5px`,
});

// const InputFields1 = styled(InputFields)(({ theme }) => ({
//   width: `327px`,
//   height: `60px`,
//   position: `absolute`,
//   left: `71px`,
//   top: `180px`,
// }));
const InputFieldsStyleName= ({
  width: `327px`,
  height: `50px`,
  position: `absolute`,
  left: `169px`,
  top: `113px`,
});
const InputFieldsStyleDetails = ({
  width: `327px`,
  height: `50px`,
  position: `absolute`,
  left: `169px`,
  top: `262px`,
});
const InputFieldsStylePitch = ({
  width: `527px`,
  height: `250px`,
  position: `absolute`,
  left: `755px`,
  top: `202px`,
});

// const InputFields2 = styled(InputFields)(({ theme }) => ({
//   width: `327px`,
//   height: `60px`,
//   position: `absolute`,
//   left: `71px`,
//   top: `313px`,
// }));

// const InputFields3 = styled(InputFields)(({ theme }) => ({
//   width: `559px`,
//   height: `346px`,
//   position: `absolute`,
//   left: `754px`,
//   top: `177px`,
// }));

const PitchDescription = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `424px`,
  position: `absolute`,
  left: `754px`,
  top: `101px`,
});

const Name = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `230px`,
  height: `38px`,
  position: `absolute`,
  left: `70px`,
  top: `127px`,
});

const Details = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `230px`,
  height: `38px`,
  position: `absolute`,
  left: `71px`,
  top: `272px`,
});

// const Frame161 = styled(Frame16)(({ theme }) => ({
//   position: `absolute`,
//   left: `371px`,
//   top: `467px`,
// }));

// const Frame121 = styled(Frame12)(({ theme }) => ({
//   position: `absolute`,
//   left: `23px`,
//   top: `467px`,
// }));

function StartUpLandingPage(props) {
  return (
    <StartUpLandingPage1 className={props.className}>
      <Page2 />
      <Navbar1 />
      <Image202303012246016
        src={Image202303012246016Image}
        loading="lazy"
        alt={'image_2023-03-01_224601648-removebg-preview 2'}
      />
      {/* <InputFields1 />
      <InputFields2 />
      <InputFields3 /> */}
      <input type="text" style={InputFieldsStyleName}/>
      <input type="text" style={InputFieldsStyleDetails}/>
      <input type="text" style={InputFieldsStylePitch}/>
      <PitchDescription>
        {`Pitch/Description: 
`}
      </PitchDescription>
      <Name>{`Name: `}</Name>
      <Details>{`Details: `}</Details>
      {/* <Frame161 />
      <Frame121 /> */}
    </StartUpLandingPage1>
  );
}

export default StartUpLandingPage;
