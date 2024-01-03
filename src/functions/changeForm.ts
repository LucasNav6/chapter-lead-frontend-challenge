const changeForm = (e: React.ChangeEvent<HTMLInputElement>, setState) => {
  const {name, value} = e.target;
  setState((state) => ({...state, [name]: value}));
};

export default changeForm;
