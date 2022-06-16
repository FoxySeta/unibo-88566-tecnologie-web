function es1bis(elements) {
  if (!elements)
    elements = document.getElementsByClassName("C1 C2");
  let array_1 = [], array_2 = [];
  for (let i = 0; i < elements.length; ++i)
    array_1[i] = array_2[i + "placeholder"] = elements[i];
  return [array_1, array_2];
}
