import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

function Home(){
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <NavBar />
    <img style={{width: 46, height: 52, left: 1239, top: 179, position: 'absolute'}} src="https://via.placeholder.com/46x52" />
    <div style={{width: 322, height: 2268, left: 300, top: -1290, position: 'absolute'}}>
        <div style={{left: 20, top: 1691, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 36, wordWrap: 'break-word'}}>Filters</div>
        <div style={{width: 69, height: 140, left: 12, top: 1764, position: 'absolute'}}>
            <div style={{left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Prices</div>
            <div style={{left: 0, top: 48, position: 'absolute', color: '#8A8A8A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$0-$25</div>
            <div style={{left: 0, top: 82, position: 'absolute', color: '#8A8A8A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$25-$50</div>
            <div style={{left: 0, top: 116, position: 'absolute', color: '#8A8A8A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$50+</div>
        </div>
        <div style={{width: 272, height: 2081, left: 12, top: 0, position: 'absolute'}}>
            <div style={{left: 0, top: 1941, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Collections</div>
            <div style={{width: 14, height: 1632, paddingTop: 7, paddingBottom: 1611, paddingLeft: 0.88, paddingRight: 0.88, left: 258, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', paddingTop: 3.94, paddingBottom: 3.14, paddingLeft: 0.07, paddingRight: 0.07, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 12.11, height: 6.92, background: 'black'}}></div>
                </div>
            </div>
            <div style={{left: 0, top: 1989, position: 'absolute', color: '#8A8A8A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>All products</div>
            <div style={{left: 0, top: 2023, position: 'absolute', color: '#8A8A8A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Tickets</div>
            <div style={{left: 0, top: 2057, position: 'absolute', color: '#8A8A8A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Clothing</div>
        </div>
        <div style={{width: 322, height: 134, left: 0, top: 2134, position: 'absolute'}}>
            <div style={{left: 11, top: 0, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Tags</div>
            <div style={{width: 322, height: 90, left: 0, top: 44, position: 'absolute'}}>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.38, left: 6, top: -1, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Fashion</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.44, left: 79.38, top: -1, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Hats</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.38, left: 130.81, top: -1, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Sandal</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.70, left: 198.19, top: -1, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Belt</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.20, left: 244.89, top: -1, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Bags</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.05, left: 6, top: 29, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Snacker</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.17, left: 81.05, top: 29, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Denim</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.03, left: 147.22, top: 29, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Minimog</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.86, left: 229.25, top: 29, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Vagabond</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.66, left: 6, top: 59, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Sunglasses</div>
                </div>
                <div style={{paddingBottom: 1, paddingLeft: 5, paddingRight: 4.91, left: 101.66, top: 59, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{color: '#777777', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Beachwear</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{left: 652, top: 388, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', paddingBottom: 1, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Recommended</div>
        </div>
    </div>
    <div style={{width: 16, paddingLeft: 8, left: 755, top: -745, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{height: 8, paddingTop: 2.25, paddingBottom: 1.79, paddingLeft: 0.54, paddingRight: 0.54, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{width: 6.92, height: 3.96, background: 'black'}}></div>
        </div>
    </div>
    <div style={{left: 1017, top: 2163.83, position: 'absolute'}}>
        <div style={{width: 44, height: 44, paddingTop: 9, paddingBottom: 11, paddingLeft: 17.39, paddingRight: 18.61, left: 0, top: 0, position: 'absolute', background: '#F3F3F3', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>1</div>
        </div>
        <div style={{width: 40, height: 40, paddingTop: 7, paddingBottom: 9, paddingLeft: 14.44, paddingRight: 15.56, left: 52, top: 2, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>2</div>
        </div>
        <div style={{width: 40, height: 40, paddingTop: 7, paddingBottom: 9, paddingLeft: 15.63, paddingRight: 15.37, left: 100, top: 2, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>3</div>
        </div>
        <div style={{width: 40, height: 40, paddingTop: 7, paddingBottom: 9, paddingLeft: 15.91, paddingRight: 15.09, left: 148, top: 2, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>»</div>
        </div>
    </div>
    <div style={{width: 978, height: 1655.33, left: 622, top: 416, position: 'absolute'}}>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 156, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Rounded Red Hat</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$8.00</div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 326, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                    </div>
                    <div style={{paddingTop: 16.70, paddingBottom: 13.30, paddingLeft: 12.83, paddingRight: 12.17, background: '#B1B1B1', borderRadius: 27, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Jost', fontWeight: '900', textTransform: 'uppercase', lineHeight: 12, wordWrap: 'break-word'}}>Sold<br/>Out</div>
                    </div>
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 183, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Linen-blend Shirt</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$17.00</div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 652, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 138, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Long-sleeve Coat</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$106.00</div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 0, top: 561.61, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 172, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Boxy Denim Hat</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$25.00</div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 326, top: 561.61, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 166, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Linen Plain Top</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$25.00</div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 652, top: 561.61, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 58.81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 184, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Oversized T-shirt</div>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 7.67, display: 'inline-flex'}}>
                        <div style={{paddingBottom: 0.19, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '500', lineHeight: 19.20, wordWrap: 'break-word'}}>$11.00</div>
                        </div>
                        <div style={{paddingBottom: 0.19, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{color: '#666666', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', textDecoration: 'line-through', lineHeight: 19.20, wordWrap: 'break-word'}}>$14.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 0, top: 1123.72, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 58.81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 155, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Polarised Sunglasses</div>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 7.11, display: 'inline-flex'}}>
                        <div style={{paddingBottom: 0.19, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '500', lineHeight: 19.20, wordWrap: 'break-word'}}>$18.00</div>
                        </div>
                        <div style={{paddingBottom: 0.19}} />
                    </div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 326, top: 1123.22, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 184, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Rockstar Jacket</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$22.00</div>
                </div>
            </div>
        </div>
        <div style={{width: 326, height: 531.61, paddingLeft: 12, paddingRight: 12, left: 652, top: 1123.22, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 302, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                <div style={{width: 302, height: 402.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{width: 302, height: 402.61}} src="https://via.placeholder.com/302x403" />
                </div>
                <div style={{height: 109, paddingBottom: 57, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingBottom: 1, paddingRight: 146, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'Volkhov', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Dotted Black Dress</div>
                    </div>
                    <div style={{color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>$20.00</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 1920, height: 200, left: 0, top: 2264, position: 'absolute'}}>
        <div style={{width: 1920, height: 200, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 20px 52.288875579833984px rgba(68, 68, 68, 0.04)', borderRadius: 5}} />
        <div style={{width: 1281, height: 56, left: 320, top: 72, position: 'absolute'}}>
            <div style={{width: 309, height: 56, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 245, height: 56, left: 64, top: 0, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: '#484848', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Local To Brown Students</div>
                    <div style={{left: 0, top: 30, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>Trust your buyers and sellers</div>
                </div>
                <div style={{width: 51, height: 50, left: 0, top: 3, position: 'absolute'}}>
                    <div style={{width: 25.05, height: 23.95, left: 11.90, top: 0, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 51, height: 23.93, left: 0, top: 26.07, position: 'absolute', background: 'black'}}></div>
                </div>
            </div>
            <div style={{width: 262, height: 56, left: 393, top: 0, position: 'absolute'}}>
                <div style={{width: 211, height: 56, left: 51, top: 0, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: '#484848', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Secure Payments</div>
                    <div style={{left: 0, top: 30, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>Payments made in person</div>
                </div>
                <div style={{width: 38, height: 50, left: 0, top: 3, position: 'absolute'}}>
                    <div style={{width: 38, height: 50, left: 0, top: 0, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 25.21, height: 24.96, left: 6.40, top: 6.75, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 17.80, height: 14.14, left: 10.11, top: 12.58, position: 'absolute', background: 'black'}}></div>
                </div>
            </div>
            <div style={{width: 268, height: 56, left: 755, top: 0, position: 'absolute'}}>
                <div style={{width: 209, height: 56, left: 59, top: 0, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: '#484848', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Save money</div>
                    <div style={{left: 0, top: 30, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>Buy second hand clothing</div>
                </div>
                <div style={{width: 46, height: 50, left: 0, top: 3, position: 'absolute', background: 'black'}}></div>
            </div>
            <div style={{width: 213, height: 56, left: 1068, top: 0, position: 'absolute'}}>
                <div style={{width: 150, height: 56, left: 63, top: 0, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: '#484848', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>24 / 7 Support</div>
                    <div style={{left: 0, top: 30, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>Dedicated support</div>
                </div>
                <div style={{width: 50, height: 50, left: 0, top: 3, position: 'absolute'}}>
                    <div style={{width: 48.70, height: 48.67, left: 0, top: 1.33, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 8.37, height: 8.37, left: 8.37, top: 33.26, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 22.37, height: 22.37, left: 27.63, top: 0, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 17.28, height: 17.28, left: 27.63, top: 5.09, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 12.18, height: 12.19, left: 27.61, top: 10.21, position: 'absolute', background: 'black'}}></div>
                    <div style={{width: 6.70, height: 6.70, left: 26.79, top: 16.51, position: 'absolute', background: 'black'}}></div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 1920, height: 138, left: 0, top: 2464, position: 'absolute'}}>
        <div style={{width: 1308.82, height: 104, left: 291, top: 34, position: 'absolute'}}>
            <div style={{left: 506, top: 78, position: 'absolute', textAlign: 'center', color: '#484848', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 26, wordWrap: 'break-word'}}>Copyright © 2023 Ivy Exchange LLC . All Rights Reseved.</div>
            <div style={{width: 1308.82, height: 36, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 431.82, height: 24, left: 877, top: 0, position: 'absolute'}}>
                    <div style={{left: 0, top: 0, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
                    <div style={{left: 118, top: 0, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Support</div>
                    <div style={{left: 250, top: 0, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>FAQ</div>
                    <div style={{width: 61.82, height: 24, left: 370, top: 0, position: 'absolute'}}>
                        <div style={{left: 0, top: 0, position: 'absolute', color: '#484848', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Pages</div>
                        <div style={{width: 6.82, height: 4.14, left: 55, top: 12, position: 'absolute', background: '#484848'}}></div>
                    </div>
                </div>
                <div style={{width: 160, height: 34, left: 0, top: 2, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 7, display: 'inline-flex'}}>
                    <img style={{width: 34, height: 34}} src="https://via.placeholder.com/34x34" />
                    <div style={{color: '#151924', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', lineHeight: 32, wordWrap: 'break-word'}}>Ivy Exchange</div>
                </div>
            </div>
        </div>
        <div style={{width: 1920, height: 0, left: 0, top: 0, position: 'absolute', border: '1px #DEDFE1 solid'}}></div>
    </div>
    <div style={{width: 937, height: 195, left: 500, top: 142, position: 'absolute'}}>
        <div style={{left: 383, top: 152, position: 'absolute'}}>
            <div style={{left: 0, top: 1.75, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Jost', fontWeight: '400', lineHeight: 22.50, wordWrap: 'break-word'}}>Home</div>
            <div style={{width: 9, height: 9, paddingLeft: 2.37, paddingRight: 2.37, paddingTop: 0.58, paddingBottom: 0.58, left: 54.34, top: 8.50, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 4.26, height: 7.84, background: 'black', border: '0.02px black solid'}}></div>
            </div>
            <div style={{left: 79, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Recommendations</div>
        </div>
        <div style={{left: 175, top: 42, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 42, fontFamily: 'Volkhov', fontWeight: '400', textTransform: 'capitalize', lineHeight: 32, wordWrap: 'break-word'}}>Welcome to Ivy Exchange!</div>
        <div style={{left: 106, top: 101, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Jost', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Online marketplace for Brown students and staff to buy and resell concert tickets, clothing, and more!</div>
    </div>
</div>
    );
}

export default Home;
