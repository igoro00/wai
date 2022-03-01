import { ReactComponent as Xd } from "./assets/1.svg";
import Article from "./features/article";
import { Curve1_1, Curve1_2, Curve2 } from "./features/curves";
import Header from "./features/header";
import { PlanCard } from "./features/planCard";
import { PlanPoint } from "./features/planCard/components/PlanPoint";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
      <Header />
      <div>
        <div style={{ position: "relative" }}>
          <Curve1_1 />
          <div
            style={{
              position: "absolute",
              top: "3vw",
              left: "5vw",
              width: "50vw",
            }}
          >
            <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>
              Lorem ipsum
            </h1>
            <h2 style={{ fontWeight: "normal", fontSize: "2rem" }}>
              dolor sit, amet consectetur adipisicing elit.
            </h2>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ width: "100%", zIndex: 2, backgroundColor: "#2F80ED" }}>
            <Curve1_2 />
          </div>
          <Curve2>
            <Article
              style={{ position: "absolute", top: "4vw", left: "12vw" }}
              title="Lorem Ipsum"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus rhoncus mi. Integer quam justo, condimentum et aliquet sit
              amet, sagittis ac lectus.
            </Article>
            <Article
              style={{ position: "absolute", top: "12vw", left: "60vw" }}
              title="Lorem Ipsum"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus rhoncus mi. Integer quam justo, condimentum et aliquet sit
              amet, sagittis ac lectus.
            </Article>
            <Article
              style={{ position: "absolute", top: "24vw", left: "25vw" }}
              title="Lorem Ipsum"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus rhoncus mi. Integer quam justo, condimentum et aliquet sit
              amet, sagittis ac lectus.
            </Article>
          </Curve2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "2%",
            marginTop: "3vw",
            marginBottom: "3vw",
          }}
        >
          <PlanCard title="Basic" price={5.99}>
            <PlanPoint enabled>abc</PlanPoint>
            <PlanPoint enabled>def</PlanPoint>
            <PlanPoint>ghi</PlanPoint>
            <PlanPoint>jkl</PlanPoint>
            <PlanPoint>mno</PlanPoint>
            <PlanPoint>prs</PlanPoint>
            <PlanPoint>tuw</PlanPoint>
            <PlanPoint>xyz</PlanPoint>
          </PlanCard>
          <PlanCard title="Pro" price={14.99}>
            <PlanPoint enabled>abc</PlanPoint>
            <PlanPoint enabled>def</PlanPoint>
            <PlanPoint enabled>ghi</PlanPoint>
            <PlanPoint enabled>jkl</PlanPoint>
            <PlanPoint enabled>mno</PlanPoint>
            <PlanPoint>prs</PlanPoint>
            <PlanPoint>tuw</PlanPoint>
            <PlanPoint>xyz</PlanPoint>
          </PlanCard>
          <PlanCard title="VIP" price={39.99}>
            <PlanPoint enabled>abc</PlanPoint>
            <PlanPoint enabled>def</PlanPoint>
            <PlanPoint enabled>ghi</PlanPoint>
            <PlanPoint enabled>jkl</PlanPoint>
            <PlanPoint enabled>mno</PlanPoint>
            <PlanPoint enabled>prs</PlanPoint>
            <PlanPoint enabled>tuw</PlanPoint>
            <PlanPoint enabled>xyz</PlanPoint>
          </PlanCard>
        </div>
      </div>
    </div>
  );
};

export default App;
