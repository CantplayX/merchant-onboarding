import { ClickHouse } from "clickhouse";
import { Request, Response } from "express";

const clickhouse = new ClickHouse({
  url: process.env.CLICKHOUSE_URL,
  port: parseInt(process.env.CLICKHOUSE_PORT || "8123", 10),
  debug: false,
  basicAuth: null,
  isUseGzip: false,
  format: "json",
  raw: false,
  config: {
    // session_id: "",
    session_timeout: 60,
    output_format_json_quote_64bit_integers: 0,
    enable_http_compression: 0,
    database: "default",
  },
});

export const logRequest = async (req: Request, res: Response) => {
  try {
    await clickhouse.insert(
      "INSERT INTO request_logs (method, url, body) VALUES",
      [
        {
          method: req.method,
          url: req.url,
          body: req.body,
        },
      ]
    );
  } catch (error) {
    console.error("Failed to log request:", error);
  }
};

export const logResponse = async (
  req: Request,
  res: Response
  // responseBody: any
) => {
  try {
    await clickhouse.insert(
      "INSERT INTO response_logs (method, url, response) VALUES",
      [
        {
          method: req.method,
          url: req.url,
          response: res,
        },
      ]
    );
  } catch (error) {
    console.error("Failed to log response:", error);
  }
};
