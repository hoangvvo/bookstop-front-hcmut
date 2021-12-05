import { ThoughtFeed } from "@/components/ThoughtFeed";
import type { User } from "@/graphql/gql.gen";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@reach/tabs";
import type { FC } from "react";
import UserBookList from "./UserBookList";
import UserInfo from "./UserInfo";

const UserPage: FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <UserInfo user={user} />
      <Tabs className="container">
        <TabList>
          <Tab>Thoughts</Tab>
          <Tab>Library</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ThoughtFeed userId={user.id} />
          </TabPanel>
          <TabPanel className="py-4">
            <UserBookList userId={user.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default UserPage;
