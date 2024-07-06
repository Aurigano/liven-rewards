import logoMin from "../assets/logo-min.png";
function ExclusiveRibbon() {
  return (
    <div className="text-white px-4 py-2 bg-accent-pink rounded-20px border-none box-border text-sm font-medium w-fit flex gap-2">
      <img src={logoMin} alt="Logo" width={"20px"} />
      App exclusive
    </div>
  );
}

export default ExclusiveRibbon;
