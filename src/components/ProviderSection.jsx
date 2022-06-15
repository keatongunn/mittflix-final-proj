import Show from "./Show";

const ProviderSection = ({company, shows}) => {
  return (
    <div className="titleList">
        <div className="title">
          <h1>{company}</h1>
          <div className="titles-wrapper">
            {shows.map((show) => (
            <Show key={show.id} show={show} />
            ))}
          </div>
        </div>
      </div>
  );
}
 
export default ProviderSection;