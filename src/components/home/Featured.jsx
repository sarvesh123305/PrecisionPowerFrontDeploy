import styled from "styled-components";
import { Container, Section } from "../../styles/styles";
import { breakpoints } from "../../styles/themes/default";

// Styled components for the layout
const FeaturedContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .icon {
    font-size: 30px;
    margin-right: 16px;
    color: #6c63ff; /* Primary icon color */
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

const FeaturedCardWrapper = styled.div`
  height: auto;
  padding: 40px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background-color: #fff; /* White background */
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
  color: #000; /* Text color changed to black */
`;

const Featured = () => {
  return (
    <Section style={{ backgroundColor: "#fff" }}>
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Why Us ? </h1>
        <FeaturedContent>
          {/* Left side replicate */}
          <FeaturedCardWrapper>
            <IconBox>
              <div className="icon">🚀</div>
              <div>
                <h4>24/7 Service</h4>
                <p>
                  Our speciality in the market is service, we offer service
                  within 24-48 hours
                </p>
              </div>
            </IconBox>
          </FeaturedCardWrapper>
          <FeaturedCardWrapper>
            <IconBox>
              <div className="icon">🛠️</div>
              <div>
                <h4>Business with 0 marketing</h4>
                <p>
                  We don't spent any cost on marketing or commission to any
                  agent for marketing.All customers we get is reference from
                  some other happy customer
                </p>
              </div>
            </IconBox>
          </FeaturedCardWrapper>

          {/* Right side content */}
          <FeaturedCardWrapper>
            <IconBox>
              <div className="icon">🚀</div>
              <div>
                <h4>Seamless support after buying product</h4>
                <p>
                  We offer seamless support to customers even after buying
                  product, in case of issues in machine in warranty we offer
                  seamless services
                </p>
              </div>
            </IconBox>
          </FeaturedCardWrapper>
          <FeaturedCardWrapper>
            <IconBox>
              <div className="icon">🛠️</div>
              <div>
                <h4>Offers best quality products</h4>
                <p>We are focused on delivery high quality products</p>
              </div>
            </IconBox>
          </FeaturedCardWrapper>
        </FeaturedContent>
      </Container>
    </Section>
  );
};

export default Featured;

// import styled from "styled-components";
// import { Container, Section } from "../../styles/styles";
// import { featuredData } from "../../data/data";
// import { Link } from "react-router-dom";
// import { breakpoints, defaultTheme } from "../../styles/themes/default";

// const FeaturedContent = styled.div`
//   grid-template-columns: repeat(2, 1fr);
//   gap: 30px;

//   @media (max-width: ${breakpoints.lg}) {
//     grid-template-columns: 100%;
//   }
// `;
// const FeaturedCardWrapper = styled.div`
//   height: 380px;
//   border-radius: 12px;
//   overflow: hidden;
//   position: relative;
//   box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4);

//   .feat-text-top {
//     margin-bottom: 24px;
//   }

//   .feat-text-large {
//     font-size: 38px;
//     line-height: 1.2;
//   }

//   .feat-text-bottom {
//     margin-top: 10px;
//     margin-bottom: 30px;
//   }

//   .feat-card-content {
//     padding: 60px 28px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     max-width: 400px;

//     @media (max-width: ${breakpoints.sm}) {
//       padding: 16px;
//     }
//   }

//   .feat-card-img {
//     object-position: 93px 90px;
//     scale: 2;

//     @media (max-width: ${breakpoints.xl}) {
//       object-position: 73px 90px;
//     }

//     @media (max-width: ${breakpoints.sm}) {
//       object-position: 0px 90px;
//     }
//   }

//   .feat-link {
//     position: relative;
//     &::after {
//       position: absolute;
//       content: "";
//       left: 0;
//       top: 100%;
//       height: 1px;
//       width: 100%;
//       background-color: ${defaultTheme.color_white};
//     }
//   }
// `;

// const Featured = () => {
//   return (
//     <Section>
//       <Container>
//         <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Why Us ?</h1>
//         <FeaturedContent className="grid">
//           {featuredData?.map((featured) => {
//             return (
//               <FeaturedCardWrapper className="text-white" key={featured.id}>
//                 <img
//                   className="object-fit-cover feat-card-img"
//                   src={featured.imgSource}
//                 />
//                 <div className="feat-card-content w-full h-full">
//                   <p className="feat-text-top text-xxl font-semibold">
//                     {featured.topText}
//                   </p>
//                   <h3 className="feat-text-large font-bold">
//                     {featured.largeText}
//                   </h3>
//                   <p className="feat-text-bottom font-light text-xl italic uppercase">
//                     {featured.bottomText}
//                   </p>
//                   <Link
//                     to={featured.buttonLink}
//                     className="feat-link font-extrabold text-white text-3xl"
//                   >
//                     {featured.buttonText}
//                   </Link>
//                 </div>
//               </FeaturedCardWrapper>
//             );
//           })}
//         </FeaturedContent>
//       </Container>
//     </Section>
//   );
// };

// export default Featured;
