import React from "react";
import { Card, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

function PokemonCardModern({ name, weight, imageUrl }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={imageUrl} />}
    >
      <Meta title={name} description={`Weight: ${weight}`} />
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            background: "#1890ff",
            color: "#fff",
          }}
        >
          Catch Pokemon
        </button>
      </div>
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

export default PokemonCardModern;
