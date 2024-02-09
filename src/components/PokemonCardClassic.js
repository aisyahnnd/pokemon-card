import React from "react";
import { Card, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

function PokemonCardClassic({ name, weight, imageUrl }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={imageUrl} />}
    >
      <Meta title={name} description={`Weight: ${weight}`} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "16px",
        }}
      >
        <Text>
          <strong>Name:</strong> Farah Fitriavida
        </Text>
        <Text>
          <strong>Department:</strong> Solution Delivery FP
        </Text>
      </div>
    </Card>
  );
}

export default PokemonCardClassic;
