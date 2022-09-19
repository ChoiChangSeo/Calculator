import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";

interface PropsIsDark {
  isDark: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 800px;
  background-color: ${(props: PropsIsDark) =>
    props.isDark ? "#000000" : "#ffffff"};
`;
const CalculatorInput = styled.input`
  width: 296px;
  height: 48px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  text-align: right;
  background-color: ${(props: PropsIsDark) =>
    props.isDark ? "#000000" : "#ffffff"};
  color: ${(props: PropsIsDark) => (props.isDark ? "#ffffff" : "#555555")};
`;
const CancelMode = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-top: 150px;
`;
const ModeChange = styled.div`
  width: 100px;
  height: 26px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #555555;
`;

const Cancel = styled.img`
  background: ${(props: PropsIsDark) => (props.isDark ? "#000000" : "#ffffff")};
`;
const Line = styled.div`
  width: 320px;
  height: 1px;
  left: 20px;
  top: 343px;
  margin: 17px 0px 25px 0px;
  background: ${(props: PropsIsDark) => (props.isDark ? "#242424" : "#eaeaea")};
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 330px;
  height: 358px;
`;

const Button = styled.button`
  padding: 13px 8px 17px;
  gap: 10px;
  width: 75px;
  height: 62px;
  background-color: ${(props: PropsIsDark) =>
    props.isDark ? "#242424" : "#f2f2f2"};
  border: ${(props: PropsIsDark) =>
    props.isDark ? "none" : "1px solid #eaeaea"};
  border-radius: 31px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
`;

const ResetButton = styled.button`
  padding: 13px 8px 17px;
  gap: 10px;
  width: 75px;
  height: 62px;
  background: ${(props: PropsIsDark) => (props.isDark ? "#242424" : "#f2f2f2")};
  border: ${(props: PropsIsDark) =>
    props.isDark ? "none" : "1px solid #eaeaea"};
  border-radius: 31px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: #d87055;
`;

const CalButton = styled.button`
  padding: 13px 8px 17px;
  gap: 10px;
  width: 75px;
  height: 62px;
  background: ${(props: PropsIsDark) => (props.isDark ? "#242424" : "#f2f2f2")};
  border: ${(props: PropsIsDark) =>
    props.isDark ? "none" : "1px solid #eaeaea"};
  border-radius: 31px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: #52951b;
`;

const ResultButton = styled.button`
  padding: 13px 8px 17px;
  gap: 10px;
  width: 75px;
  height: 62px;
  background: #52951b;
  border: ${(props: PropsIsDark) =>
    props.isDark ? "none" : "1px solid #eaeaea"};
  border-radius: 31px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: white;
`;

export default function CalculatorPage() {
  const [calResult, setCalResult] = useState<string | number>("");
  const [bracket, setBracket] = useState<boolean>(false);
  const [conversion, setConversion] = useState<boolean>(true);
  const [isDark, setIsDark] = useState(false);

  const changeConversion = (e: MouseEvent<HTMLButtonElement>) => {
    if (conversion) {
      setConversion((prev) => !prev);
      setCalResult((prev) => prev + (e.target as HTMLButtonElement).value);
    } else {
      setConversion((prev) => !prev);
      setCalResult(String(calResult).replace("(-", ""));
    }
  };

  const getBracket = (e: MouseEvent<HTMLButtonElement>) => {
    setBracket((prev) => !prev);
    setCalResult((prev) => prev + (e.target as HTMLButtonElement).value);
  };

  const getNumber = (e: MouseEvent<HTMLButtonElement>) => {
    setCalResult((prev) => prev + (e.target as HTMLButtonElement).value);
  };

  const getOperator = (e: MouseEvent<HTMLButtonElement>) => {
    setCalResult((prev) => prev + (e.target as HTMLButtonElement).value);
  };

  const getDot = (e: MouseEvent<HTMLButtonElement>) => {
    if (String(calResult).length === 0) {
      return;
    }
    setCalResult((prev) => prev + (e.target as HTMLButtonElement).value);
  };

  const allClear = () => {
    setCalResult("");
  };
  const deleteCalc = () => {
    const temp = String(calResult).slice(0, -1);
    setCalResult(temp);
  };

  const resultCalculator = () => {
    const replaceCalc = String(calResult)
      .replaceAll("x", "*")
      .replaceAll("÷", "/")
      .replaceAll("(-", "-");

    const result = new Function("return " + String(replaceCalc));

    setCalResult(result());
  };
  return (
    <Wrapper isDark={isDark}>
      <CalculatorInput
        isDark={isDark}
        readOnly
        type="text"
        value={calResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      />
      <CancelMode>
        <ModeChange onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? "🌚 다크모드" : "🌝 라이트모드"}
        </ModeChange>
        <Cancel isDark={isDark} onClick={deleteCalc} src="Vector.png" />
      </CancelMode>
      <Line isDark={isDark}></Line>
      <ButtonBox>
        <ResetButton isDark={isDark} onClick={allClear}>
          C
        </ResetButton>
        <CalButton
          isDark={isDark}
          value={bracket ? ")" : "("}
          onClick={getBracket}
        >
          ()
        </CalButton>
        <CalButton isDark={isDark} onClick={getOperator} value="%">
          %
        </CalButton>
        <CalButton isDark={isDark} onClick={getOperator} value="÷">
          ÷
        </CalButton>
        <Button isDark={isDark} onClick={getNumber} value={7}>
          7
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={8}>
          8
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={9}>
          9
        </Button>
        <CalButton isDark={isDark} onClick={getOperator} value="x">
          X
        </CalButton>
        <Button isDark={isDark} onClick={getNumber} value={4}>
          4
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={5}>
          5
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={6}>
          6
        </Button>
        <CalButton isDark={isDark} onClick={getOperator} value="-">
          -
        </CalButton>
        <Button isDark={isDark} onClick={getNumber} value={1}>
          1
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={2}>
          2
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={3}>
          3
        </Button>
        <CalButton isDark={isDark} onClick={getOperator} value="+">
          +
        </CalButton>
        <Button
          isDark={isDark}
          value={conversion ? "(-" : ""}
          onClick={changeConversion}
        >
          +/-
        </Button>
        <Button isDark={isDark} onClick={getNumber} value={0}>
          0
        </Button>
        <Button isDark={isDark} onClick={getDot} value=".">
          .
        </Button>
        <ResultButton isDark={isDark} onClick={resultCalculator}>
          =
        </ResultButton>
      </ButtonBox>
    </Wrapper>
  );
}
