import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Button } from "../button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[400px] w-full max-w-2xl flex items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="tab1" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="tab1" className="flex-1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex-1">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="flex-1">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <div className="p-4 border rounded-lg w-full">
          <h3 className="text-lg font-semibold mb-2">Tab 1 Content</h3>
          <p className="text-gray-600">
            This is the content for the first tab. You can place any content
            here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <div className="p-4 border rounded-lg w-full">
          <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
          <p className="text-gray-600">
            This is the content for the second tab. Each tab can have different
            content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <div className="p-4 border rounded-lg w-full">
          <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
          <p className="text-gray-600">
            This is the content for the third tab. You can have as many tabs as
            needed.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export const Default: Story = {
  render: (args) => <BasicTabs {...args} />,
};

const CardTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px py border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter new password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>
              Manage your application settings and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Email notifications</h4>
                <p className="text-sm text-gray-600">Receive email updates</p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Push notifications</h4>
                <p className="text-sm text-gray-600">
                  Receive push notifications
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save settings</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export const WithCards: Story = {
  render: (args) => <CardTabs {...args} />,
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[400px] w-full flex items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
};

const VerticalTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs
      {...args}
      defaultValue="overview"
      className="w-full"
      orientation="vertical"
    >
      <div className="flex gap-4">
        <TabsList className="flex-col h-fit">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="overview" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-600">
                Get a high-level view of your dashboard with key metrics and
                insights.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Detailed analytics and performance metrics for your application.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Reports</h3>
              <p className="text-gray-600">
                Generate and view detailed reports for your business needs.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-0">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Notifications</h3>
              <p className="text-gray-600">
                Manage your notification preferences and settings.
              </p>
            </div>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export const Vertical: Story = {
  render: (args) => <VerticalTabs {...args} />,
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[400px] w-full max-w-4xl flex items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
};

const DisabledTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <Tabs {...args} defaultValue="active" className="w-full">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Active Tab</h3>
          <p className="text-gray-600">This tab is active and functional.</p>
        </div>
      </TabsContent>
      <TabsContent value="disabled" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Disabled Tab</h3>
          <p className="text-gray-600">
            This content won't be accessible because the tab is disabled.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="another" className="mt-4">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Another Tab</h3>
          <p className="text-gray-600">This is another functional tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export const WithDisabled: Story = {
  render: (args) => <DisabledTabs {...args} />,
};

const SignInTabs = (args: React.ComponentProps<typeof Tabs>) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-sm border p-6">
      <Tabs {...args} defaultValue="signin" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="signin">Sign in</TabsTrigger>
          <TabsTrigger value="forgot">Forgot Password</TabsTrigger>
        </TabsList>
        <TabsContent value="signin" className="mt-6">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary-hover transition-colors">
              Sign in
            </button>
            <div className="text-sm text-gray-600 space-y-2">
              <p>
                No account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Register for an account
                </a>{" "}
                to be able to apply for jobs.
              </p>
              <p>
                Not received a verification email?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Resend verification email
                </a>
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="forgot" className="mt-6">
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary-hover transition-colors">
              Reset Password
            </button>
            <div className="text-sm text-gray-600">
              <p>
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const SignInForm: Story = {
  render: (args) => <SignInTabs {...args} />,
  decorators: [
    (Story) => {
      return (
        <div className="min-h-[400px] w-full max-w-md flex items-center justify-center p-4">
          <Story />
        </div>
      );
    },
  ],
};
