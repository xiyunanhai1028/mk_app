import { AsyncStorage } from 'react-native';

export default class DataStore {
    /**
     * 保存数据
     * @param {保存的建} url 
     * @param {保存的数据} data 
     * @param {回掉} callback 
     */
    saveData(url, data, callback) {
        if (!data || !url) return;
        AsyncStorage.setItem(url, JOSN.stringify(this._wrapData(data)), callback);
    }

    /**
     * 获取本地数据
     * @param {key} url 
     */
    fetchLocalData(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (err, result) => {
                if (!err) {
                    try {
                        resolve(JSON.parse(result))
                    } catch (e) {
                        reject(e);
                        console.error(e);
                    }
                } else {
                    reject(err);
                    console.error(err)
                }
            })
        })
    }

    /**
     * 获取网络数据
     * @param {访问地址} url 
     */
    fetchNetData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Network response was not ok')
                })
                .then(responseData => {
                    //本地存储
                    this.saveData(url, responseData)
                    resolve(responseData)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    _wrapData(data) {
        return { data: data, timestamp: new Date().getTime() }
    }

    /**
     *  检查timestamp是否在有效期内
     * @param {项目更新时间} timestamp 
     */
    static checkTimestampValid(timestamp) {
        const currentDate = new Date();
        const targetDate = new Date();
        targetDate.setTime(timestamp);
        if (currentDate.getMonth() !== targetDate.getMonth()) return false;
        if (currentDate.getDate() !== targetDate.getDate()) return false;
        if (currentDate.getHours() - targetDate.getHours() > 4) return false;
        return true
    }
}