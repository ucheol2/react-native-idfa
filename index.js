import { NativeModules } from 'react-native';

console.log(NativeModules);
const { PTRIDFA } = NativeModules;

const getIDFA = PTRIDFA.getIDFA;

export { getIDFA };
