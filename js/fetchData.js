const readJson=async ()=>{
  try {
    const response = await fetch("js/data.json");
    if (!response.ok) {
      throw new Error("HTTP error" + response.status);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    this.dataError = true;
  }
};

const dataJson=await readJson();

export default dataJson;