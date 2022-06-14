import React from "react";
import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";

export interface IAuthContainerProps {
  header: any;
  children: any;
}

const AuthContainer: React.FunctionComponent<IAuthContainerProps> = (props) => {
  const { children, header }= props;

  return (
    <Container>
      <Row>
        {/* <Col
          xs={{ size: 10, offset: 8 }}
          sm={{ size: 8, offset: 2 }}
          md={{ size: 6, offset: 3 }}
          lg={{ size: 4, offset: 4 }}
        > */}
        <Card className="absolute lg:relative mt-[100px] lg:mt-[65px] ml-[15px] lg:ml-[430px] bg-slate-600 w-[81.3%] lg:w-[31.3%] h-[50vh] lg:h-[57vh] mb-[122px] lg:mb-[92px] rounded-b-md">
          <CardHeader className="text-white bg-sky-700 h-[10vh] lg:h-[10vh] pt-[20px] pl-[16px] lg:p-5 text-lg">
            {header}
          </CardHeader>
          <CardBody className="mt-4 ml-4">{children}</CardBody>
        </Card>
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default AuthContainer;
