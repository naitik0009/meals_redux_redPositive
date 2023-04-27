import { useEffect } from 'react';
import {FlatList,View} from 'react-native';
import { MEALS } from '../config/dummy-data';
import { useContext } from 'react';
import { FavouriteContext } from '../context/context';
import { MealItem } from '../components/mealItems';
import { useSelector } from 'react-redux';
export const FavouriteScreen = ()=>{
    
    // const {ids} = useContext(FavouriteContext);
    const ids = useSelector(state=>state.fav.ids);
    const favMeal = MEALS.filter(meal=>ids.includes(meal.id));


    return (
    <View>
        <FlatList data={favMeal}  renderItem={(item,index)=>{
            console.log(item);
            return <MealItem key={index} item={item.item}/>
            }}/>
        {/* {favMeal.map((item,index)=><Text key={index}>{item.imageUrl}</Text>)} */}
    </View>
    );
};