import { h, customElement, useState, useEffect } from "atomico/src/core/core";

const CustomElement = () => {
  let [state, setState] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setState(state => state + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <host shadowDom>
      <style>{`
        :host{
          font-size:${Math.floor(Math.random() * 100) + 10}px;
        }
      `}</style>
      inside web-component {state + ""}
    </host>
  );
};

customElement("custom-element", CustomElement);
