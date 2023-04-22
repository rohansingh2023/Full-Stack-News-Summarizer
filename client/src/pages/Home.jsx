import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
    const [textLen, setTextLen] = useState(500);
    let loremtext = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod nostrum officiis cupiditate iure vitae inventore nam possimus, non voluptatum dolores vero odit in architecto consequatur saepe optio iste obcaecati ratione doloribus dolore quam reiciendis? Eius id quo quia eligendi maiores deleniti, dolorem sed quas quidem nisi? Nostrum corrupti maiores quae sint minus recusandae voluptate dolorem sed? Impedit asperiores sint harum quas illo? Hic aperiam nihil eveniet, consectetur consequuntur sunt alias aliquam, fugit quibusdam aliquid perferendis iure dignissimos ducimus magnam molestiae obcaecati debitis culpa deleniti nisi quas veniam voluptas unde. Non, nisi tempore ea rem tenetur fuga fugiat iure ab dolore quos quis earum expedita vitae repellendus consequatur. Perspiciatis fugiat iure itaque incidunt numquam ex mollitia, quo eaque dolor, corrupti id reprehenderit doloribus reiciendis voluptas laudantium consequuntur nihil illum quidem modi ad aliquid. Accusamus dolor nesciunt dolorem provident a libero tempora, earum suscipit molestiae eum ipsam ipsa eveniet. Animi magni ratione numquam deleniti praesentium enim, nobis perspiciatis ea saepe qui facilis debitis. Veniam nostrum sint optio? Tenetur soluta et sunt adipisci numquam voluptatum recusandae unde repellat quam laboriosam. Sequi illo iusto quam. Incidunt corporis nihil consequuntur explicabo delectus totam laudantium, dicta dolore dolorem. Culpa laborum dignissimos inventore tempora deserunt iusto, aliquam similique consectetur nihil. Minima provident quidem nulla aliquid dolores magni voluptates sunt rem perspiciatis dolorum maxime sapiente voluptate et iusto, quod veniam mollitia quam non commodi fugiat culpa. Minus cupiditate nihil ratione dolorum temporibus laboriosam expedita dolores odit fuga, optio, qui quis eveniet dignissimos et molestiae. Aliquid inventore possimus voluptatum repudiandae enim ipsum id dignissimos maxime a autem voluptates est velit facilis vitae dolore ullam modi, neque veritatis fugiat architecto! Inventore quis cupiditate nulla ipsa, quod incidunt tempore laborum quisquam nisi autem odit omnis veniam recusandae in ipsum nesciunt perspiciatis possimus adipisci eum minima libero quia pariatur reiciendis. Magni quibusdam dicta quidem reiciendis vel! Ratione ipsa quas aliquid eum rem. Sed quae expedita dignissimos provident dolor deleniti ullam, molestiae culpa voluptatem delectus libero reprehenderit numquam laudantium debitis quos illum excepturi ducimus explicabo eaque eum dicta. Saepe deserunt rem illum praesentium excepturi, numquam, non quaerat ad, facilis impedit aut totam aspernatur officia. Quidem aut atque alias et delectus ipsam, id expedita architecto enim, laborum, obcaecati sequi quae harum quisquam blanditiis beatae. Eveniet, quibusdam? Sint aperiam cum deserunt eveniet nihil, consequuntur officiis rem cumque quos expedita mollitia beatae repudiandae minus consequatur minima non numquam iste sed aspernatur. Obcaecati ratione dolorem ab quidem voluptate, consectetur laboriosam praesentium? Facere explicabo quo ipsum atque, eos hic eaque maxime molestiae placeat, labore id nihil laudantium deserunt quasi dolores cupiditate velit adipisci mollitia repudiandae quia beatae eius quaerat nostrum. Unde nisi quaerat consectetur odit molestiae nulla tempore cumque esse eveniet provident, fuga quibusdam nam quasi veniam amet ab porro minus error? Eaque quaerat eos necessitatibus omnis ad suscipit culpa, quia provident perferendis repellendus eligendi officia atque maiores sint. Iure, adipisci ad accusantium voluptas corporis distinctio amet cumque voluptatibus iusto, qui sunt aspernatur autem dolorum commodi explicabo laborum! Exercitationem nam repellendus, molestias culpa fugit voluptate nulla officia error eaque velit. Repellendus aliquid omnis qui ipsam facere saepe, nemo quas animi mollitia tenetur, optio ea excepturi veniam quos laudantium nesciunt consequuntur odit. Autem fugiat eos laudantium expedita accusantium ea mollitia odio libero esse pariatur, minus quod suscipit tempora, ut non illum alias voluptatum totam eveniet molestias perferendis quis, fuga quam in? Eius iusto veniam nemo voluptatem nesciunt minus id, officia, dicta recusandae voluptatibus labore consequuntur necessitatibus enim neque consequatur, aperiam earum minima perspiciatis omnis obcaecati harum facere quod laudantium. Accusamus, dolorum qui! Perspiciatis nesciunt laboriosam expedita culpa eaque rerum quaerat, earum sequi illo reprehenderit ullam nulla illum similique enim libero, ratione consequatur error, debitis sed. Ipsam laborum, ipsum officia, sapiente quisquam culpa assumenda atque expedita error non ea vitae! Fugit aperiam similique nihil blanditiis, pariatur exercitationem dolorem architecto provident molestiae voluptatum, esse, deserunt earum maxime laboriosam. Quos quaerat quam laboriosam impedit eveniet, atque omnis numquam inventore mollitia minima doloremque at assumenda modi saepe animi porro aut dolores pariatur maiores necessitatibus eligendi cumque harum nulla explicabo. Nobis sunt praesentium minima officia obcaecati, iste cum laudantium eaque maiores ullam numquam earum pariatur asperiores! Obcaecati harum labore praesentium consequuntur autem? Autem sit ab temporibus odio perspiciatis, maxime consequuntur aliquid corporis consectetur."
    return (
        <div>
            <div className="bg-bgImg3 flex flex-row bg-no-repeat bg-cover bg-center bg-fixed">

                <div className="px-7 mx-auto py-[16%] text-center flex justify-center items-center gap-8 flex-col text-black font-BraahOne text-4xl">
                    <h1>Welcome To Our News Summarizer</h1>
                    <h1>Valuing Your Time Always</h1>
                    <h1>Upload Any News Article And Get Its Summary Instantly</h1>
                </div>

            </div>

            <div className="h-96 flex flex-col font-Greatvibes justify-evenly items-center text-cyan-600 text-6xl">
                <Typewriter
                    className=""
                    onInit={(typewriter) => {

                        typewriter

                            .typeString("Time Is Precisious")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Just Read The Summary")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("And Get The Knowledge")
                            .start();
                    }}
                />

                <h2 className="text-2xl basis-1 text-gray-500 leading-10 w-full font-BraahOne px-56 text-center">We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in shorts.</h2>
            </div>

            <div className="flex flex-row justify-evenly items-center p-5 min-h-[400px] bg-cyan-200">
                <div className="font-BraahOne text-gray-700 text-3xl">
                    <h1>
                        Decide How Much You Want To Cut It Short.
                    </h1>
                    <h1>
                        Adjust The Length Of Summary Using Slider
                    </h1>
                </div>
                <div>
                    <textarea className="text-gray-500 text-xs p-10 rounded-lg cursor-default outline-none mt-10" cols="60" rows="12" value={loremtext.slice(0, textLen)} readOnly></textarea>
                    <div className="text-center">
                        <span>100</span>
                        <input
                            type="range" min="100" max="700" value={textLen}
                            onChange={(e) => setTextLen(e.target.value)}
                            className="mx-3 my-10 w-[60%]"
                            id="myRange">
                        </input>
                        <span>700</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;