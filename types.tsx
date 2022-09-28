/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type DashboardStackParamList = {
  DashboardScreen: undefined;
  DetailScreen: { data: object } | undefined;
};

export type Prop = StackScreenProps<RootStackParamList>;

export type RootTabParamList = {
  DashboardStack: NavigatorScreenParams<DashboardStackParamList> | undefined;
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList>,
  StackScreenProps<RootStackParamList>
>;

export type DashboardScreenProps = CompositeScreenProps<
  StackScreenProps<RootStackParamList>,
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList>,
    StackScreenProps<DashboardStackParamList>
  >
>;

export type Combinable = string | number;
