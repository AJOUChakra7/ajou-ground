import styled from 'styled-components';


export default function Spinner() {
  return (
    <SpinnerWrapper>
      <div id="dim" />
      <SpinnerContainer>
          <div className="spinner"/>
      </SpinnerContainer>
    </SpinnerWrapper>
  )
}

// style ------------------------------

export const SpinnerWrapper = styled.div`
 #dim {
   position : fixed;
  z-index : 9999;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%);

    background: rgba(255,255,2550.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    
    max-width : 25rem;
    width : 100%;
    height : 100%;

    opacity : .45;
 }
`


export const SpinnerContainer = styled.div`
border-radius : 2rem;
padding : 5rem;

z-index : 10000;

position : absolute;
top : 50%;
left : 50%;
transform : translate(-50%, -50%);

.spinner {
   position: relative;
   width: 22.4px;
   height: 22.4px;
}

.spinner::before,
.spinner::after {
   content: '';
   width: 100%;
   height: 100%;
   display: block;
   animation: spinner-b4c8mmmd 0.5s backwards, spinner-49opz7md 1.25s 0.5s infinite ease;
   border: 5.6px solid #1a70d2;
   border-radius: 50%;
   box-shadow: 0 -33.6px 0 -5.6px #1a70d2;
   position: absolute;
}

.spinner::after {
   animation-delay: 0s, 1.25s;
}

@keyframes spinner-b4c8mmmd {
   from {
      box-shadow: 0 0 0 -5.6px #1a70d2;
   }
}

@keyframes spinner-49opz7md {
   to {
      transform: rotate(360deg);
   }
}
`