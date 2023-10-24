import * as $ from 'jquery';

function createMainWindow() {
    const {
        Screen, Rectangle,
        NativeWindowInitOptions,
        NativeWindowSystemChrome,
        NativeWindowType,
        HTMLLoader,
        URLRequest,
    } = air;

    const mainScreen = Screen.mainScreen;
    const screenBounds = mainScreen.visibleBounds;

    const width: number = 800;
    const height: number = 600;

    const centeredWindowRect = new Rectangle(
        (screenBounds.left + screenBounds.right - width) / 2,
        (screenBounds.top + screenBounds.bottom - height) / 2,
        width,
        height,
    );

    const options = new NativeWindowInitOptions();
    options.systemChrome = NativeWindowSystemChrome.STANDARD;
    options.type = NativeWindowType.NORMAL;
    options.maximizable = true;
    options.minimizable = true;
    options.resizable = true;
    options.transparent = false;

    const rootHtmlWindow = HTMLLoader.createRootWindow(
        /* visible: */ false,
        /* windowInitOptions: */ options,
        /* scrollBarsVisible: */ false,
        /* bounds: */ centeredWindowRect,
    );

    rootHtmlWindow.load(
        new URLRequest("verseview2.html")
    );

    return rootHtmlWindow;
}

// export const mainWindow = createMainWindow();

export * as cfg from "./config";

// react render like method

// alert(String(Array['map']));

const names = [
    'Alice',
    'Emily',
    'Kate',
]

import '@lib/polyfills/array/map';

// FC: OK
// Element: OK
// Fragment: OK
// Component: TODO
// export const App = ({}) => (
//     <>
//         <button id="arc" class="primary-btn">Hello</button>
//         <select onchange={(evt: any) => {
//             alert(evt.target.value);
//         }}>
//             {names.map((name) => (
//                 <option value={name}>{name}</option>
//             ))}
//         </select>
//     </>
// )
//
// import dom from '@lib/jsx/dom';
// dom.render(<App />, document.getElementById('root'));

/* ------------------------------------------------------------------------------------------------------------------ */
import { Component, render } from '@lib/zrx/preact';
import { useState, useEffect } from '@lib/zrx/hooks';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>{count}</div>;
};

const App = ({ dev }: { dev?: boolean }) => {
    const [show, setShow] = useState(true);

    return (
        <>
            {dev && (
                <div className="dev-toolbar">
                    <button id="dev-refresh" onClick={() => window.location.reload()}>Refresh</button>
                </div>
            )}

            <div>
                <button
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    {show ? "Hide" : "Show"}
                </button>

                {show ? <Counter /> : <div>No counter</div>}
            </div>
        </>
    );
};

if (typeof window !== "undefined") {
    render(<App dev />, document.getElementById("root"));
}
/* ------------------------------------------------------------------------------------------------------------------ */

$(() => {
    const vt = {
        'runtime': {
            'XML': 'class',
            'XMLList': 'class',
            'Object': 'class',
            'int': 'class',
            'uint': 'class',
            'Namespace': 'class',
            'QName': 'class',

            'trace': 'function',
            'isXMLName': 'function',
            'bugzilla': 'function',
            'watson': 'function',

            "avm2": {
                'intrinsics': {
                    'memory': {
                        'casi32': 'function',
                        'mfence': 'function',
                    },
                }
            },
            'avmplus': {
                'FLASH10_FLAGS': 'int',
            },

            'air': {
                'desktop': {
                    'URLFilePromise': 'class',
                },
                'net': {
                    'URLFilePromise': 'class',
                },
            },
            'adobe': {
                'utils': {
                    'MMExecute': 'function',
                    'MMEndCommand': 'function',

                    'CustomActions': 'class',
                    'XMLUI': 'class',
                }
            },
            'flash': {
                'trace': {
                    'Trace': 'class',
                },
                'debugger': {
                    'enterDebugger': 'function',
                },
                'html': {
                    'HTMLHistoryItem': '',
                    'HTMLLoader': '',
                    'HTMLHost': '',
                    'HTMLWindowCreateOptions': '',
                    'HTMLPDFCapability': '',
                    'HTMLSWFCapability': '',
                },
                'ui': {
                    'Mouse': '',
                    'MouseCursor': '',
                    'MouseCursorData': '',
                    'ContextMenu': '',
                    'ContextMenuItem': '',
                    'ContextMenuBuiltInItems': '',
                    'Keyboard': '',
                    'KeyboardType': '',
                    'KeyLocation': '',
                },
                'xml': {
                    'XMLNode': '',
                    'XMLDocument': '',
                    'XMLNodeType': '',
                },
                'utils': {
                    'ByteArray': '',
                    'CompressionAlgorithm': '',
                    'Endian': '',
                    'Dictionary': '',
                    'Proxy': '',
                    'Timer': '',

                    'IDataInput': '',
                    'IDataOutput': '',
                    'IExternalizable': '',

                    'setInterval': '',
                    'setTimeout': '',
                    'clearInterval': '',
                    'clearTimeout': '',
                    'escapeMultiByte': '',
                    'unescapeMultiByte': '',
                    'describeType': '',
                    'getDefinitionByName': '',
                    'getQualifiedClassName': '',
                    'getQualifiedSuperclassName': '',
                    'getTimer': '',
                },
                'profiler': {
                    'showRedrawRegions': '',
                    'Telemetry': '',
                },
                'security': {
                    'IURIDereferencer': '',

                    'XMLSignatureValidator': '',
                    'RevocationCheckSettings': '',
                    'ReferencesValidationSetting': '',
                    'SignatureStatus': '',
                    'CertificateStatus': '',
                    'SignerTrustSettings': '',
                    'X509Certificate': '',
                    'X500DistinguishedName': '',
                },
                'desktop': {
                    'IFilePromise': '',


                },
                'crypto': {
                    'generateRandomBytes': '',
                },
                'concurrent': {
                    'Condition': '',
                    'Mutex': '',
                },
                'display3D': {
                    'Context3D': '',
                    'Context3DProfile': '',
                    'Program3D': '',
                    'VertexBuffer3D': '',
                    'IndexBuffer3D': '',
                }
            }
        }
    };

    // const val = window.runtime.flash['utils']['flash_proxy'];
    // const val = window.runtime['com']['adobe']['serialization']['json']['JSON'];
    // alert('X: ' + String(val));
});

// export default air;