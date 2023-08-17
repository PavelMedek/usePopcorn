import { usePlatformData } from "@/hooks/usePlatformData";
import { useFilteredSeries } from "@/hooks/useFilteredSeries";

const TestPage = () => {
  const platformName = "hbomax";
  const platformData = usePlatformData(platformName);
  const filteredSeries = useFilteredSeries(platformData?.series);

  if (!platformData) {
    return <div>No</div>;
  }

  if (!filteredSeries) {
    return <div>No</div>;
  }

  return (
    <div>
      {filteredSeries.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>

          <p>Categories: {item.slug}</p>
        </div>
      ))}
    </div>
  );
};

export default TestPage;
