import { Platform } from "react-native";

export const fontWeight={
    weight1:Platform.OS === 'ios' ? '100' : 'bold',
    weight2:Platform.OS === 'ios' ? '200' : 'bold',
    weight3:Platform.OS === 'ios' ? '300' : 'bold',
    weight4:Platform.OS === 'ios' ? '400' : 'bold',
    weight5:Platform.OS === 'ios' ? '500' : 'bold',
    weight6:Platform.OS === 'ios' ? '600' : 'bold',
    weight7:Platform.OS === 'ios' ? '700' : 'bold',
    weight8:Platform.OS === 'ios' ? '800' : 'bold',
    weight9:Platform.OS === 'ios' ? '900' : 'bold',
  
}