import React from "react";
import { htmlElementMap, type HtmlElements } from "../../types";

interface Text {
  content: string;
  className?: string;
  as?: HtmlElements
}

export const Text: React.FC<Text> = ({ content, as = "PARAGRAPH", className = "" }) => {
  const Tag = htmlElementMap[as];
  return <Tag className={className}>{content}</Tag>
}