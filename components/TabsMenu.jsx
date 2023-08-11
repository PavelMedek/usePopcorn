const Tab = ({ label, active, onClick, isFirst, isLast }) => (
  <p
    onClick={onClick}
    className={`py-2 md:w-full cursor-pointer px-5 ${
      isFirst ? "rounded-l-xl" : ""
    } ${isLast ? "rounded-r-xl" : ""}`}
    style={{
      background: active ? "#4C4158" : "#1A161E",
    }}
  >
    {label}
  </p>
);

const TabsMenu = ({ activeLink, handleTabClick }) => {
  const tabs = [
    { label: "Přehled", id: "Overview" },
    { label: "Epizody", id: "Episodes" },
    { label: "Články", id: "Articles" },
  ];

  return (
    <div className="flex border border-white w-fit md:w-full rounded-xl">
      {tabs.map((tab, index) => (
        <Tab
          key={tab.id}
          label={tab.label}
          active={activeLink === tab.id}
          isFirst={index === 0}
          isLast={index === tabs.length - 1}
          onClick={() => handleTabClick(tab.id, "activeTab")}
        />
      ))}
    </div>
  );
};

export default TabsMenu;
