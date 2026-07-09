import { Header, LayoutContent, Paper } from "@jahia/moonstone";
import { useTranslation } from "react-i18next";

export const AdminPanel = () => {
  const { t } = useTranslation();

  return (
    <LayoutContent
      header={<Header title={t("hello", { name: window.contextJsParameters.currentUser })} />}
      content={
        <Paper>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sunt obcaecati
          reiciendis dolores perspiciatis aliquam nemo laborum dolorum, perferendis et omnis quod
          numquam deleniti quis voluptatem consequuntur esse quisquam harum.
        </Paper>
      }
    />
  );
};
