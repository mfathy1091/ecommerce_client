import { useState } from "react";

const useInpt = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  const attributeObj = {
    value,
    onChange: (e) => setValue(e.target.value)
  }
  return [value, reset, attributeObj]
}

export default useInpt;