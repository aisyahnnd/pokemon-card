import React from "react";
import { Card, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

function PokemonCardCompact({ name, weight, imageUrl }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={imageUrl} />}
    >
      <Meta title={name} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "16px",
        }}
      >
        <Text>
          <strong>Name:</strong> Sawitri Fina Kartika
        </Text>
        <Text>
          <strong>Department:</strong> Solution Delivery AT
        </Text>
      </div>
    </Card>
  );
}

export default PokemonCardCompact;
