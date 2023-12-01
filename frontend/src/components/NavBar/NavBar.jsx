import React from "react";
import Logo from "../../assets/image-logo.png"


export function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: 48,
        paddingRight: 48,
        paddingTop: 16,
        paddingBottom: 16,
        background: "white",
        borderRadius: 12,
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 748,
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 65,
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 7,
            display: "flex",
          }}
        >
          <img
            style={{ width: 34, height: 34 }}
            src={Logo}
            alt="Ivy Exchange Logo"
          />
          <div
            style={{
              color: "#151924",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "500",
              lineHeight: 32,
              wordWrap: "break-word",
            }}
          >
            Ivy Exchange
          </div>
        </div>
        <div
          style={{
            height: 36,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            background: "#F5F6F7",
            borderRadius: 1000,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12,
            display: "flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              color: "#797F8F",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: 20,
              wordWrap: "break-word",
            }}
          >
            Search here...
          </div>
          <div
            style={{
              width: 20,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div style={{ width: 20, height: 20, position: "relative" }}>
              <div
                style={{
                  width: 15.83,
                  height: 15.83,
                  left: 1.67,
                  top: 1.67,
                  position: "absolute",
                  border: "1.25px #444750 solid",
                }}
              ></div>
              <div
                style={{
                  width: 1.67,
                  height: 1.67,
                  left: 16.67,
                  top: 16.67,
                  position: "absolute",
                  border: "1.25px #444750 solid",
                }}
              ></div>
              <div
                style={{
                  width: 20,
                  height: 20,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: 40,
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 24,
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "flex",
          }}
        >
          <div style={{ width: 24, height: 24, position: "relative" }}>
            <div
              style={{
                width: 18,
                height: 15.96,
                left: 3,
                top: 4.54,
                position: "absolute",
                border: "2px #444750 solid",
              }}
            ></div>
          </div>
          <div style={{ width: 24, height: 24, position: "relative" }}>
            <div
              style={{
                width: 18,
                height: 16.92,
                left: 3,
                top: 4,
                position: "absolute",
                border: "2px #444750 solid",
              }}
            ></div>
          </div>
          <div style={{ width: 24, height: 24, position: "relative" }}>
            <div
              style={{
                width: 17,
                height: 19,
                left: 4,
                top: 2,
                position: "absolute",
                border: "2px #444750 solid",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12,
            display: "flex",
          }}
        >
          <div style={{ width: 40, height: 40, position: "relative" }}>
            <div
              style={{
                width: 40,
                height: 40,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#D9D9D9",
                borderRadius: 1000,
              }}
            />
            <img
              style={{
                width: 50,
                height: 75,
                left: -3,
                top: -8,
                position: "absolute",
              }}
              src="https://via.placeholder.com/50x75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
