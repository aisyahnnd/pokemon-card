import React from "react";
import { Card, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

function PokemonCardSimple({ name, weight, imageUrl }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={imageUrl} />}
    >
      <Meta title={name} />
      <p>Weight: {weight}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "16px",
        }}
      >
        <Text>
          <strong>Name:</strong> ....
        </Text>
        <Text>
          <strong>Department:</strong> ....
        </Text>
      </div>
    </Card>
  );
}

export default PokemonCardSimple;
