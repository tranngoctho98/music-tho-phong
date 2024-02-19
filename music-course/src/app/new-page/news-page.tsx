import ViewScreen from "../../components/view-screen/view-screen";
import ContentList from "../../components/content-renders/content-list";
import dataContent from "../../assets/data-jsons/hire/hire.json";

const NewsPage = () => {
  return (
    <ViewScreen
      title="Thuê ca sĩ và ban nhạc"
      coverImage="/images/hire/hire-1.jpg"
    >
      <ContentList listContent={dataContent} />
    </ViewScreen>
  );
};

export default NewsPage;
