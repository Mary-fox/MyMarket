import React from 'react';
import styles from "./Table.module.css"


function Table () {

return (
        <section className={styles.comparison}>
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Сравнение моделей</h3>
            <table className={styles.table}> 
                <thead>
                    <tr>
                        <th>Модель</th>
                        <th>Вес</th>
                        <th>Высота</th>
                        <th>Ширина</th>
                        <th>Толщина</th>
                        <th>Чип</th>
                        <th>Объем памяти</th>
                        <th>Аккумулятор</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr className={styles.row}>
                        <td>iPhone 11</td>
                        <td>194 грамма</td>
                        <td>150.0 мм</td>
                        <td>75.7 мм</td>
                        <td>8.3 мм</td>
                        <td>A13 Bionic chip</td>
                        <td>до 128 Гб</td>
                        <td>до 17 часов</td>
                    </tr>
                    <tr className={styles.row}>
                        <td>iPhone 12</td>
                        <td>164 грамма</td>
                        <td>146.7 мм</td>
                        <td>71.5 мм</td>
                        <td>7.4 мм</td>
                        <td>A14 Bionic chip</td>
                        <td>до 256 Гб</td>
                        <td>до 19 часов</td>
                    </tr>
                    <tr className={styles.row}>
                        <td>iPhone 13</td>
                        <td>174 грамма</td>
                        <td>146.7 мм</td>
                        <td>71.5 мм</td>
                        <td>7.65 мм</td>
                        <td>A15 Bionic chip</td>
                        <td>до 512 Гб</td>
                        <td>до 19 часов</td>
                    </tr>
                </tbody> 
            </table>
        </div>
    </section> 
    )}

export default Table;
