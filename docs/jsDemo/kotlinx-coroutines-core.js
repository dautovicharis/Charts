(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.q3;
  var protoOf = kotlin_kotlin.$_$.ta;
  var THROW_CCE = kotlin_kotlin.$_$.oe;
  var Continuation = kotlin_kotlin.$_$.p8;
  var initMetadataForClass = kotlin_kotlin.$_$.u9;
  var VOID = kotlin_kotlin.$_$.d;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.d3;
  var Key_instance = kotlin_kotlin.$_$.c3;
  var equals = kotlin_kotlin.$_$.l9;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.h8;
  var toString = kotlin_kotlin.$_$.xa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.i8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.g8;
  var CoroutineImpl = kotlin_kotlin.$_$.v8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.w9;
  var initMetadataForInterface = kotlin_kotlin.$_$.x9;
  var isInterface = kotlin_kotlin.$_$.ja;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.z9;
  var hashCode = kotlin_kotlin.$_$.t9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.s2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.u2;
  var Companion_instance = kotlin_kotlin.$_$.p3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.r2;
  var createFailure = kotlin_kotlin.$_$.xe;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.l8;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.k8;
  var get = kotlin_kotlin.$_$.m8;
  var minusKey = kotlin_kotlin.$_$.n8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.o8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var addSuppressed = kotlin_kotlin.$_$.te;
  var Enum = kotlin_kotlin.$_$.de;
  var startCoroutine = kotlin_kotlin.$_$.x8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gf;
  var Long = kotlin_kotlin.$_$.je;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.i;
  var RuntimeException = kotlin_kotlin.$_$.ne;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.f2;
  var captureStack = kotlin_kotlin.$_$.d9;
  var Error_0 = kotlin_kotlin.$_$.ee;
  var Error_init_$Init$ = kotlin_kotlin.$_$.i1;
  var Element = kotlin_kotlin.$_$.t8;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.f8;
  var ArrayList = kotlin_kotlin.$_$.z3;
  var SequenceScope = kotlin_kotlin.$_$.ac;
  var initMetadataForLambda = kotlin_kotlin.$_$.y9;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var sequence = kotlin_kotlin.$_$.lc;
  var plus = kotlin_kotlin.$_$.u8;
  var get_0 = kotlin_kotlin.$_$.r8;
  var fold = kotlin_kotlin.$_$.q8;
  var minusKey_0 = kotlin_kotlin.$_$.s8;
  var anyToString = kotlin_kotlin.$_$.b9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.se;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var Companion_getInstance = kotlin_kotlin.$_$.l3;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.xd;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.ye;
  var toLong = kotlin_kotlin.$_$.va;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.n6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var compareTo = kotlin_kotlin.$_$.i9;
  var last = kotlin_kotlin.$_$.cd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.v9;
  var IllegalStateException = kotlin_kotlin.$_$.he;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.t1;
  var NoSuchElementException = kotlin_kotlin.$_$.ke;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var getKClass = kotlin_kotlin.$_$.b;
  var Unit = kotlin_kotlin.$_$.re;
  var fillArrayVal = kotlin_kotlin.$_$.m9;
  var copyOf = kotlin_kotlin.$_$.a5;
  var joinToString = kotlin_kotlin.$_$.z5;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.mf;
  var Exception = kotlin_kotlin.$_$.fe;
  var toLongOrNull = kotlin_kotlin.$_$.qd;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.j8;
  var plus_0 = kotlin_kotlin.$_$.d7;
  var KtList = kotlin_kotlin.$_$.b4;
  var listOf_0 = kotlin_kotlin.$_$.m6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var getStringHashCode = kotlin_kotlin.$_$.s9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.d2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var removeFirstOrNull = kotlin_kotlin.$_$.f7;
  var KtMutableList = kotlin_kotlin.$_$.f4;
  var coerceIn = kotlin_kotlin.$_$.rb;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.ox(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.ox.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.jx(onCancelling, invokeImmediately, handler) : $super.jx.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.oz(cause) : $super.oz.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(CancelHandlerBase, 'CancelHandlerBase');
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForClass(CancelHandler, 'CancelHandler', VOID, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, CancelHandler);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(InvokeOnCancel, 'InvokeOnCancel', VOID, CancelHandler);
  initMetadataForCoroutine($awaitCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().u12(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForInterface(ChildHandle, 'ChildHandle');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [ChildHandle]);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LinkedListNode, 'LinkedListNode', LinkedListNode);
  initMetadataForClass(LinkedListHead, 'LinkedListHead', LinkedListHead, LinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LinkedListHead, [LinkedListHead, Incomplete]);
  initMetadataForClass(CompletionHandlerBase, 'CompletionHandlerBase', VOID, LinkedListNode);
  initMetadataForClass(JobNode, 'JobNode', VOID, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobCancellingNode, 'JobCancellingNode', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobCancellingNode);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobCancellingNode);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(SupervisorCoroutine, 'SupervisorCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [ScopeCoroutine, Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$3, CoroutineImpl);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$5, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.u1f(cause) : $super.u1f.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.ox(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.ox.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], [0, 1]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [0, 1]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$13, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForClass(Emitter, 'Emitter');
  initMetadataForCoroutine($collectCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCoroutine($collectCOROUTINE$15, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$21, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForCoroutine($collectCOROUTINE$22, CoroutineImpl);
  initMetadataForClass(ReadonlyStateFlow, 'ReadonlyStateFlow', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$23, CoroutineImpl);
  initMetadataForClass(ReadonlySharedFlow, 'ReadonlySharedFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, CancelHandler, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.t1p(owner, $completion) : $super.t1p.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.v1p(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.v1p.call(this, owner);
    }
    return tmp;
  }
  initMetadataForInterface(Mutex, 'Mutex', VOID, VOID, VOID, [1]);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreImpl, 'SemaphoreImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreImpl, [SemaphoreImpl, Mutex], [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForObject(TaskContext, 'TaskContext');
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, CancelHandler);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.bw(parentContext.u9(Key_instance_3));
    }
    this.ew_1 = parentContext.rh(this);
  }
  protoOf(AbstractCoroutine).n9 = function () {
    return this.ew_1;
  };
  protoOf(AbstractCoroutine).fw = function () {
    return this.ew_1;
  };
  protoOf(AbstractCoroutine).gw = function () {
    return protoOf(JobSupport).gw.call(this);
  };
  protoOf(AbstractCoroutine).hw = function (value) {
  };
  protoOf(AbstractCoroutine).iw = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).jw = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).kw = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.iw(state.lw_1, state.nw());
    } else {
      this.hw((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).s9 = function (result) {
    var state = this.ow(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.pw(state);
  };
  protoOf(AbstractCoroutine).pw = function (state) {
    return this.qw(state);
  };
  protoOf(AbstractCoroutine).rw = function (exception) {
    handleCoroutineException(this.ew_1, exception);
  };
  protoOf(AbstractCoroutine).sw = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.ew_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).sw.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).sw.call(this);
  };
  protoOf(AbstractCoroutine).tw = function (start, receiver, block) {
    start.ww(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.dy() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.tw(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.n9();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.u9(Key_instance), oldContext.u9(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.ew_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.jy();
    }
    return tmp$ret$0;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.dy() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.tw(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).ay = function (exception) {
    handleCoroutineException(this.ew_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.qy_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).ex = function () {
    startCoroutineCancellable_0(this.qy_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.iy_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.iy_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.iy_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.iy_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.iy_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).qw = function (state) {
    this.pw(state);
  };
  protoOf(DispatchedCoroutine).pw = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.uy_1), recoverResult(state, this.uy_1));
  };
  protoOf(DispatchedCoroutine).jy = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.ax());
    if (state instanceof CompletedExceptionally)
      throw state.lw_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dz_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.dz_1.cy(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).hz = function ($completion) {
    var tmp = new $awaitCOROUTINE$1(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.lz_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).ex = function () {
    startCoroutineCancellable_0(this.lz_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.qz(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.tz_1 = handle;
  }
  protoOf(DisposeOnCancel).uz = function (cause) {
    return this.tz_1.vz();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.uz(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.tz_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.c10();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.j10()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.i10_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.ax();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.l10_1)) {
      var tmp_0 = $this.e10_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).k10();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.e10_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.m10(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.g10_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.r10(index, cause, $this.n9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.n9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.g10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.g10_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.g10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.g10_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.n9().u9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.kx(true, VOID, tmp$ret$1);
    $this.i10_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.h10_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (state instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.a11()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lw_1;
              if (handler instanceof CancelHandler) {
                $this.x10(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.t10_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              if (state.y10()) {
                $this.x10(handler, state.w10_1);
                return Unit_instance;
              }
              var update = state.z10(VOID, handler);
              if ($this.h10_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.h10_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = state instanceof CancelHandler;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h10_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.h10_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp1 instanceof CancelledContinuation) {
            if (tmp1.f11()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>.<anonymous>' call
                $this.b11(onCancellation, tmp1.lw_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h10_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, $this.l10_1, onCancellation, idempotent);
          if (!$this.h10_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp1.v10_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.g11();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.e10_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.f10_1 = this.e10_1.n9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.g10_1 = atomic$int$1(tmp$ret$0);
    this.h10_1 = atomic$ref$1(Active_instance);
    this.i10_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).h11 = function () {
    return this.e10_1;
  };
  protoOf(CancellableContinuationImpl).n9 = function () {
    return this.f10_1;
  };
  protoOf(CancellableContinuationImpl).ax = function () {
    return this.h10_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).bx = function () {
    var tmp = this.ax();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).i11 = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.bx()) {
      handle.vz();
      this.i10_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).j10 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.h10_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.v10_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.g11();
      return false;
    }
    var tmp_0 = this.g10_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.h10_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).j11 = function () {
    return this.ax();
  };
  protoOf(CancellableContinuationImpl).k11 = function (takenState, cause) {
    var this_0 = this.h10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.y10()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.z10(VOID, VOID, VOID, VOID, cause);
            if (this.h10_1.atomicfu$compareAndSet(state, update)) {
              state.l11(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.h10_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).oz = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.h10_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        if (!(!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false))
          return false;
        var tmp;
        if (tmp1 instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = tmp1 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.h10_1.atomicfu$compareAndSet(tmp1, update)) {
          break $l$block;
        }
        if (tmp1 instanceof CancelHandler) {
          this.x10(tmp1, cause);
        } else {
          if (tmp1 instanceof Segment) {
            callSegmentOnCancellation(this, tmp1, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.l10_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).m11 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.oz(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).x10 = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.n9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).b11 = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.n9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).n11 = function (parent) {
    return parent.fx();
  };
  protoOf(CancellableContinuationImpl).jy = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.o11();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.o11();
    }
    var state = this.ax();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.lw_1, this);
    if (get_isCancellableMode(this.l10_1)) {
      var job = this.n9().u9(Key_instance_3);
      if (!(job == null) && !job.gw()) {
        var cause = job.fx();
        this.k11(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.p11(state);
  };
  protoOf(CancellableContinuationImpl).o11 = function () {
    var tmp = this.e10_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q11(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.g11();
    this.oz(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).s9 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.l10_1);
  };
  protoOf(CancellableContinuationImpl).sz = function (value, onCancellation) {
    return resumeImpl(this, value, this.l10_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).r11 = function (segment, index) {
    var tmp0 = this.g10_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).qz = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    invokeOnCancellationImpl(this, cancelHandler);
  };
  protoOf(CancellableContinuationImpl).g11 = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.vz();
    this.i10_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).mz = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).nz = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.l10_1);
  };
  protoOf(CancellableContinuationImpl).rz = function (_this__u8e3s4, value) {
    var tmp = this.e10_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.xz_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.l10_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).p11 = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.s10_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).s11 = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).s11.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.e10_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.t11() + '(' + toDebugString(this.e10_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).t11 = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.s10_1 = result;
    this.t10_1 = cancelHandler;
    this.u10_1 = onCancellation;
    this.v10_1 = idempotentResume;
    this.w10_1 = cancelCause;
  }
  protoOf(CompletedContinuation).y10 = function () {
    return !(this.w10_1 == null);
  };
  protoOf(CompletedContinuation).l11 = function (cont, cause) {
    var tmp0_safe_receiver = this.t10_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.x10(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.u10_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.CompletedContinuation.invokeHandlers.<anonymous>' call
      cont.b11(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).w11 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).z10 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.s10_1 : result;
    cancelHandler = cancelHandler === VOID ? this.t10_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.u10_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.v10_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.w10_1 : cancelCause;
    return $super === VOID ? this.w11(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.w11.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.s10_1) + ', cancelHandler=' + toString_0(this.t10_1) + ', onCancellation=' + toString_0(this.u10_1) + ', idempotentResume=' + toString_0(this.v10_1) + ', cancelCause=' + toString_0(this.w10_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.s10_1 == null ? 0 : hashCode(this.s10_1);
    result = imul(result, 31) + (this.t10_1 == null ? 0 : hashCode(this.t10_1)) | 0;
    result = imul(result, 31) + (this.u10_1 == null ? 0 : hashCode(this.u10_1)) | 0;
    result = imul(result, 31) + (this.v10_1 == null ? 0 : hashCode(this.v10_1)) | 0;
    result = imul(result, 31) + (this.w10_1 == null ? 0 : hashCode(this.w10_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.s10_1, tmp0_other_with_cast.s10_1))
      return false;
    if (!equals(this.t10_1, tmp0_other_with_cast.t10_1))
      return false;
    if (!equals(this.u10_1, tmp0_other_with_cast.u10_1))
      return false;
    if (!equals(this.v10_1, tmp0_other_with_cast.v10_1))
      return false;
    if (!equals(this.w10_1, tmp0_other_with_cast.w10_1))
      return false;
    return true;
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.x11_1 = handler;
  }
  protoOf(InvokeOnCancel).uz = function (cause) {
    this.x11_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.uz(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.x11_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g12_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.g12_1.cy(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.bw(parent);
  }
  protoOf(CompletableDeferredImpl).nx = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).hz = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(CompletableDeferredImpl).j12 = function (value) {
    return this.k12(value);
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.lw_1 = cause;
    this.mw_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).nw = function () {
    return this.mw_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).a11 = function () {
    return this.mw_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.lw_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.e11_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).f11 = function () {
    return this.e11_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.l12_1 = result;
    this.m12_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.l12_1) + ', onCancellation=' + toString(this.m12_1) + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.l12_1 == null ? 0 : hashCode(this.l12_1);
    result = imul(result, 31) + hashCode(this.m12_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.l12_1, tmp0_other_with_cast.l12_1))
      return false;
    if (!equals(this.m12_1, tmp0_other_with_cast.m12_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.lw_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).o12 = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).q12 = function (context, block) {
    return this.p12(context, block);
  };
  protoOf(CoroutineDispatcher).v9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).w9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.r12();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.u9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.s12(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.u9(Key_instance_3) == null) ? context : context.rh(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.n9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.fw().u9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.ox(cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.fw().u9(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gw();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).ww = function (block, receiver, completion) {
    var tmp;
    switch (this.s2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).dy = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.u9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.a1(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.a1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.n9()).t12(timeMillis, cancellable);
    }
    return cancellable.jy();
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.x12_1 = new Long(0, 0);
    this.y12_1 = false;
    this.z12_1 = null;
  }
  protoOf(EventLoop).a13 = function () {
    var tmp0_elvis_lhs = this.z12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.lf();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.u11();
    return true;
  };
  protoOf(EventLoop).b13 = function (task) {
    var tmp0_elvis_lhs = this.z12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.z12_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.jf(task);
  };
  protoOf(EventLoop).c13 = function () {
    return this.x12_1.a1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).d13 = function () {
    var tmp0_safe_receiver = this.z12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).e13 = function (unconfined) {
    this.x12_1 = this.x12_1.y2(delta(this, unconfined));
    if (!unconfined)
      this.y12_1 = true;
  };
  protoOf(EventLoop).f13 = function (unconfined) {
    this.x12_1 = this.x12_1.z2(delta(this, unconfined));
    if (this.x12_1.a1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.y12_1) {
      this.g13();
    }
  };
  protoOf(EventLoop).g13 = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.h13_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).i13 = function () {
    var tmp0_elvis_lhs = this.h13_1.k13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().h13_1.l13(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).zw = function () {
    return null;
  };
  protoOf(NonDisposableHandle).vz = function () {
  };
  protoOf(NonDisposableHandle).sx = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u9(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.gw())
      throw _this__u8e3s4.fx();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.u9(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.px();
    return _this__u8e3s4.lx($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u9(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gw();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCompletion(handle);
    return _this__u8e3s4.ix(tmp$ret$1);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.ox(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.n13_1 = isActive;
  }
  protoOf(Empty).gw = function () {
    return this.n13_1;
  };
  protoOf(Empty).o13 = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.n13_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).gw = function () {
    return true;
  };
  protoOf(NodeList).o13 = function () {
    return this;
  };
  protoOf(NodeList).s13 = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.o8('List{');
    this_0.o8(state);
    this_0.o8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.t13_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.o8(', ');
        }
        this_0.n8(node);
      }
      cur = cur.t13_1;
    }
    this_0.o8(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.s13('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).g14 = function () {
    var tmp = this.f14_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).gw = function () {
    return true;
  };
  protoOf(JobNode).o13 = function () {
    return null;
  };
  protoOf(JobNode).vz = function () {
    return this.g14().mx(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.g14()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.l14_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.l14_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lw_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.m14();
    var exceptions = state.n14(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.ay(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).a11();
      }
    }
    if (!wasCancelling) {
      $this.xx(finalException);
    }
    $this.kw(finalState);
    var casSuccess = $this.zv_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.m14()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.jw() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.p(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_0 = _iterator__ex2g4s_0.i();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.k() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.k());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.g();
    while (tmp0_iterator.h()) {
      var exception = tmp0_iterator.i();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.e(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.zv_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.xx(null);
    $this.kw(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.yw();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.completeStateFinalization.<anonymous>' call
      tmp0_safe_receiver.vz();
      $this.xw(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lw_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.rw(new CompletionHandlerException('Exception in completion handler ' + toString(state) + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.o13();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.xx(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.t13_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.t13_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.rw(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.yx())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.yw();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.sx(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.t13_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.t13_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      $this.rw(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.n13_1)
        return 0;
      if (!$this.zv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.ex();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.zv_1.atomicfu$compareAndSet(state, state.o14_1))
          return -1;
        $this.ex();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.f14_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.ax() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.a14(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.n13_1 ? list : new InactiveNodeList(list);
    $this.zv_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.h14(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.t13_1;
    $this.zv_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var state = $this.ax();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeOnCompletion(cancellable);
    disposeOnCancellation(cancellable, $this.ix(tmp$ret$1));
    return cancellable.jy();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.ax();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.p14();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.jw() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).vx();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.ax();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp1.q14())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.m14();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp1.r14(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.s14();
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
            notifyCancelling($this, tmp1.i14_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp1.gw()) {
              if (tryMakeCancelling($this, tmp1, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp1, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(tmp1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.o13();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.zv_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.p14())
      return get_COMPLETING_ALREADY();
    finishing.t14(true);
    if (!(finishing === state)) {
      if (!$this.zv_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.m14();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
      finishing.r14(tmp0_safe_receiver.lw_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.s14();
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lw_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.o13();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.y14_1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.kx(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.qw(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.v13_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.u13_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.t13_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.v13_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.m14() ? 'Cancelling' : state.p14() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.gw() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.i14_1 = list;
    this.j14_1 = atomic$boolean$1(isCompleting);
    this.k14_1 = atomic$ref$1(rootCause);
    this.l14_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).o13 = function () {
    return this.i14_1;
  };
  protoOf(Finishing).t14 = function (value) {
    this.j14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).p14 = function () {
    return this.j14_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).z14 = function (value) {
    this.k14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).s14 = function () {
    return this.k14_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).q14 = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).m14 = function () {
    return !(this.s14() == null);
  };
  protoOf(Finishing).gw = function () {
    return this.s14() == null;
  };
  protoOf(Finishing).n14 = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.e(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.s14();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
      list.h2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.e(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).r14 = function (exception) {
    var rootCause = this.s14();
    if (rootCause == null) {
      this.z14(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.e(eh);
        this_0.e(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).e(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.m14() + ', completing=' + this.p14() + ', rootCause=' + toString_0(this.s14()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.i14_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.e15_1 = parent;
    this.f15_1 = state;
    this.g15_1 = child;
    this.h15_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).uz = function (cause) {
    continueCompleting(this.e15_1, this.f15_1, this.g15_1, this.h15_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.uz(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.o15_1 = job;
  }
  protoOf(AwaitContinuation).n11 = function (parent) {
    var state = this.o15_1.ax();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.s14();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.lw_1;
    return parent.fx();
  };
  protoOf(AwaitContinuation).t11 = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.i11();
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.ix(tmp$ret$1));
    return cont.jy();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.x15_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).l16 = function ($this$sequence, $completion) {
    var tmp = this.m16($this$sequence, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ba = function (p1, $completion) {
    return this.l16(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            this.z15_1 = this.x15_1.ax();
            var tmp_0 = this.z15_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.h9_1 = 6;
              suspendResult = this.y15_1.kg(this.z15_1.y14_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.z15_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.a16_1 = this.z15_1.o13();
                if (this.a16_1 == null) {
                  this.b16_1 = null;
                  this.h9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.c16_1 = this.a16_1;
                  this.d16_1 = this.c16_1;
                  var tmp_3 = this;
                  tmp_3.e16_1 = this.d16_1;
                  this.f16_1 = this.e16_1;
                  var tmp_4 = this;
                  tmp_4.g16_1 = this.f16_1;
                  this.h16_1 = this.g16_1;
                  this.i16_1 = this.h16_1.t13_1;
                  this.h9_1 = 1;
                  continue $sm;
                }
              } else {
                this.h9_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.i16_1, this.h16_1)) {
              this.h9_1 = 4;
              continue $sm;
            }

            var tmp_5 = this.i16_1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.j16_1 = this.i16_1;
              this.k16_1 = this.j16_1;
              this.h9_1 = 2;
              suspendResult = this.y15_1.kg(this.k16_1.y14_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i16_1 = this.i16_1.t13_1;
            this.h9_1 = 1;
            continue $sm;
          case 4:
            var tmp_7 = this;
            tmp_7.b16_1 = Unit_instance;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.h9_1 = 7;
            continue $sm;
          case 6:
            this.h9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).m16 = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.x15_1, completion);
    i.y15_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.l16($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.zv_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.aw_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).u = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).xw = function (value) {
    this.aw_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).yw = function () {
    return this.aw_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).zw = function () {
    var tmp0_safe_receiver = this.yw();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zw();
  };
  protoOf(JobSupport).bw = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.xw(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.dx();
    var handle = parent.wx(this);
    this.xw(handle);
    if (this.bx()) {
      handle.vz();
      this.xw(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).ax = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.zv_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.n16(this);
    }
  };
  protoOf(JobSupport).gw = function () {
    var state = this.ax();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.gw();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).bx = function () {
    var tmp = this.ax();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).cx = function () {
    var state = this.ax();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.m14();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).dx = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.ax();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).ex = function () {
  };
  protoOf(JobSupport).fx = function () {
    var state = this.ax();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.s14();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.gx(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.hx(state.lw_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).gx = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.jw() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).hx = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.gx(_this__u8e3s4, message) : $super.gx.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).ix = function (handler) {
    return this.jx(false, true, handler);
  };
  protoOf(JobSupport).jx = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.ax();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        if (tmp1 instanceof Empty) {
          if (tmp1.n13_1) {
            if (this.zv_1.atomicfu$compareAndSet(tmp1, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp1);
          }
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var list = tmp1.o13();
            if (list == null) {
              promoteSingleToNodeList(this, tmp1 instanceof JobNode ? tmp1 : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = tmp1 instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = tmp1.s14();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !tmp1.p14();
                  } else {
                    tmp_1 = false;
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, tmp1, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp1, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp1 instanceof CompletedExceptionally ? tmp1 : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lw_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).lx = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.n9();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).mx = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.ax();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.zv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.o13() == null)) {
            node.z13();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).nx = function () {
    return false;
  };
  protoOf(JobSupport).ox = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.jw() : null, null, this);
    } else {
      tmp = cause;
    }
    this.qx(tmp);
  };
  protoOf(JobSupport).jw = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).qx = function (cause) {
    this.ux(cause);
  };
  protoOf(JobSupport).rx = function (parentJob) {
    this.ux(parentJob);
  };
  protoOf(JobSupport).sx = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.ux(cause) && this.zx();
  };
  protoOf(JobSupport).tx = function (cause) {
    return this.ux(cause);
  };
  protoOf(JobSupport).ux = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.nx()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.qw(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).vx = function () {
    var state = this.ax();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.s14();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.lw_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).k12 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.ax();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.qw(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).ow = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.ax();
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).m13 = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).wx = function (child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.kx(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).rw = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).xx = function (cause) {
  };
  protoOf(JobSupport).yx = function () {
    return false;
  };
  protoOf(JobSupport).zx = function () {
    return true;
  };
  protoOf(JobSupport).ay = function (exception) {
    return false;
  };
  protoOf(JobSupport).kw = function (state) {
  };
  protoOf(JobSupport).qw = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.by() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).by = function () {
    return this.sw() + '{' + stateString(this, this.ax()) + '}';
  };
  protoOf(JobSupport).sw = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).cy = function ($completion) {
    $l$loop: while (true) {
      var state = this.ax();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.lw_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.o14_1 = list;
  }
  protoOf(InactiveNodeList).o13 = function () {
    return this.o14_1;
  };
  protoOf(InactiveNodeList).gw = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.o14_1.s13('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.y14_1 = childJob;
  }
  protoOf(ChildHandleNode).zw = function () {
    return this.g14();
  };
  protoOf(ChildHandleNode).uz = function (cause) {
    return this.y14_1.rx(this.g14());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.uz(cause);
  };
  protoOf(ChildHandleNode).sx = function (cause) {
    return this.g14().sx(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.s16_1 = handler;
    this.t16_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).uz = function (cause) {
    if (this.t16_1.atomicfu$compareAndSet(0, 1))
      this.s16_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.uz(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.y16_1 = handler;
  }
  protoOf(InvokeOnCompletion).uz = function (cause) {
    return this.y16_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.uz(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.d17_1 = continuation;
  }
  protoOf(ResumeOnCompletion).uz = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.d17_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.s9(tmp$ret$0);
    return Unit_instance;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.uz(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e17_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.j17_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).uz = function (cause) {
    var state = this.g14().ax();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.j17_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.lw_1;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.s9(tmp$ret$0);
    } else {
      var tmp2 = this.j17_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      tmp2.s9(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.uz(cause);
  };
  function IncompleteStateBox(state) {
    this.e17_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.o17_1 = child;
  }
  protoOf(ChildContinuation).uz = function (cause) {
    this.o17_1.m11(this.o17_1.n11(this.g14()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.uz(cause);
  };
  function handlesExceptionF($this) {
    var tmp = $this.yw();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g14();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.zx())
        return true;
      var tmp_1 = parentJob.yw();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.g14();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.bw(parent);
    this.r17_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).nx = function () {
    return true;
  };
  protoOf(JobImpl).zx = function () {
    return this.r17_1;
  };
  protoOf(JobImpl).s17 = function (exception) {
    return this.k12(new CompletedExceptionally(exception));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.x17_1 = handle;
  }
  protoOf(DisposeOnCompletion).uz = function (cause) {
    return this.x17_1.vz();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.uz(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.a18();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).a18 = function () {
    var main = Dispatchers_getInstance().f18();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.z17();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).sx = function (cause) {
    return false;
  };
  function supervisorScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.supervisorScope.<anonymous>' call
    var coroutine = new SupervisorCoroutine($completion.n9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function SupervisorCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(SupervisorCoroutine).sx = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.n18_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$3(timeMillis, block, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.n9(), uCont);
    this.d19_1 = time;
  }
  protoOf(TimeoutCoroutine).u11 = function () {
    this.tx(TimeoutCancellationException_0(this.d19_1, get_delay(this.ew_1), this));
  };
  protoOf(TimeoutCoroutine).sw = function () {
    return protoOf(ScopeCoroutine).sw.call(this) + '(timeMillis=' + this.d19_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.uy_1;
    var context = cont.n9();
    disposeOnCompletion(coroutine, get_delay(context).u12(coroutine.d19_1, coroutine, coroutine.ew_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.v12(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$3(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w18_1 = timeMillis;
    this.x18_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            if (this.w18_1.a1(new Long(0, 0)) <= 0)
              return null;
            this.y18_1 = {_v: null};
            this.i9_1 = 2;
            this.h9_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.w18_1, this);
            this.y18_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.x18_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.i9_1 = 3;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.k9_1;
              if (e.n18_1 === this.y18_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.k9_1;
            }

          case 3:
            throw this.k9_1;
          case 4:
            this.i9_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 3) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).o12 = function (context) {
    return false;
  };
  protoOf(Unconfined).p12 = function (context, block) {
    var yieldContext = context.u9(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.g19_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_4);
    this.g19_1 = false;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.n9();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.xz_1.o12(context)) {
        cont.h19(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.h19(context.rh(yieldContext), Unit_instance);
        if (yieldContext.g19_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.n19_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.m19_1 = channel;
    this.n19_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).o19 = function () {
    return ensureNotNull(this.m19_1);
  };
  protoOf(ChannelSegment).p19 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).q19 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).r19 = function (index) {
    var tmp = this.n19_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).s19 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.r19(index);
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.t19(index);
    return this_0;
  };
  protoOf(ChannelSegment).t19 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).u19 = function (index) {
    return this.n19_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).v19 = function (index, value) {
    this.n19_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).w19 = function (index, from, to) {
    return this.n19_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).x19 = function (index, update) {
    return this.n19_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).r10 = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.r19(index_0);
    $l$loop: while (true) {
      var cur = this.u19(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.w19(index_0, cur, update)) {
          this.t19(index_0);
          this.k1a(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.o19().z19_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.t19(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.o19().z19_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).k1a = function (index, receiver) {
    if (receiver) {
      var tmp = this.o19();
      var tmp0 = this.p10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = tmp0.a3(toLong(other)).y2(toLong(index));
      tmp.l1a(tmp$ret$1);
    }
    this.m1a();
  };
  function onClosedHasNext($this) {
    $this.y1a_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.a1b_1.b1b();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.z1a_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.a1b_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, this_0, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.a1(this_0.c1b()) < 0) {
          segment.w1a();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.f1a_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.d1b()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.b1a_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.b3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.c3(toLong(other_0)).f1();
            if (!segment_0.p10_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this_0, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.a1(this_0.c1b()) < 0) {
                segment_0.w1a();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.w1a();
              // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.y1a_1 = element;
              $this.z1a_1 = null;
              var tmp0_safe_receiver = $this.a1b_1.z19_1;
              cancellable.sz(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.n9()));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.w1a();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.y1a_1 = element_0;
        $this.z1a_1 = null;
        var tmp0_safe_receiver_0 = $this.a1b_1.z19_1;
        cancellable.sz(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.n9()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.o11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.jy();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.z1a_1);
    $this.z1a_1 = null;
    $this.y1a_1 = get_CHANNEL_CLOSED();
    var cause = $this.a1b_1.b1b();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.s9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.s9(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1b_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$7).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            var tmp_0 = this;
            tmp_0.n1b_1 = this.m1b_1.a1b_1;
            var tmp_1 = this;
            tmp_1.o1b_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.q1b_1 = this.n1b_1;
            this.r1b_1 = this.o1b_1;
            this.s1b_1 = this.q1b_1.f1a_1.kotlinx$atomicfu$value;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 9;
              continue $sm;
            }

            if (this.q1b_1.d1b()) {
              var tmp_2 = this;
              tmp_2.p1b_1 = onClosedHasNext(this.m1b_1);
              this.h9_1 = 10;
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 3:
            this.t1b_1 = this.q1b_1.b1a_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.t1b_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.u1b_1 = tmp0.b3(toLong(other));
            var tmp_4 = this;
            var tmp2 = this.t1b_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.v1b_1 = tmp2.c3(toLong(other_0)).f1();
            if (!this.s1b_1.p10_1.equals(this.u1b_1)) {
              this.w1b_1 = findSegmentReceive(this.q1b_1, this.u1b_1, this.s1b_1);
              if (this.w1b_1 == null) {
                this.h9_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.x1b_1 = this.w1b_1;
                this.h9_1 = 4;
                continue $sm;
              }
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.s1b_1 = this.x1b_1;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.y1b_1 = updateCellReceive(this.q1b_1, this.s1b_1, this.v1b_1, this.t1b_1, this.r1b_1);
            if (this.y1b_1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.r1b_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.q1b_1, this.s1b_1, this.v1b_1);
              }
              this.s1b_1;
              this.v1b_1;
              this.t1b_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.y1b_1 === get_FAILED()) {
                if (this.t1b_1.a1(this.q1b_1.c1b()) < 0) {
                  this.s1b_1.w1a();
                }
                this.h9_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.y1b_1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.a1c_1 = this.s1b_1;
                  var tmp_10 = this;
                  tmp_10.b1c_1 = this.v1b_1;
                  var tmp_11 = this;
                  tmp_11.c1c_1 = this.t1b_1;
                  this.d1c_1 = this.a1c_1;
                  this.e1c_1 = this.b1c_1;
                  this.f1c_1 = this.c1c_1;
                  this.h9_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.m1b_1, this.d1c_1, this.e1c_1, this.f1c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.s1b_1.w1a();
                  var tmp_13 = this.y1b_1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  this.m1b_1.y1a_1 = element;
                  tmp_12.z1b_1 = true;
                  this.h9_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_14 = this;
            return suspendResult;
          case 7:
            this.p1b_1 = this.z1b_1;
            this.h9_1 = 10;
            continue $sm;
          case 8:
            throw this.k9_1;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return this.p1b_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.c1a_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) || it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp0_safe_receiver = $this.z19_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.g1c());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.s9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.g1c();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.s9(tmp$ret$3);
    }
    return cancellable.jy();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.w1a();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.s9(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.s9(tmp$ret$2);
          break;
        case 2:
          prepareSenderForSuspension(cancellable, $this, segment, index);
          break;
        case 4:
          if (s.a1($this.h1c()) < 0) {
            segment.w1a();
          }

          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.w1a();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
              var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.b3(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.c3(toLong(other_0)).f1();
              if (!segment_0.p10_1.equals(id)) {
                var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              var tmp1_subject = access$updateCellSend($this, segment_0, i, element, s_0, cancellable, closed);
              if (tmp1_subject === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
                segment_0.w1a();
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.coroutines.resume' call
                // Inline function 'kotlin.Companion.success' call
                var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
                cancellable.s9(tmp$ret$8);
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.coroutines.resume' call
                // Inline function 'kotlin.Companion.success' call
                var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
                cancellable.s9(tmp$ret$10);
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
                if (closed) {
                  segment_0.m1a();
                  // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                }
                var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                if (tmp2_safe_receiver == null)
                  null;
                else {
                  access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                }
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
                if (s_0.a1($this.h1c()) < 0) {
                  segment_0.w1a();
                }
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
                onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                break $l$block_5;
              } else if (tmp1_subject === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
                segment_0.w1a();
                continue $l$loop_0;
              } else if (tmp1_subject === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
                // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
                var message = 'unexpected';
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.o11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.jy();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.r11(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.z19_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.n9());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.g1c(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.s9(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.q19(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.u19(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.w19(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.w19(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.t19(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.v19(index, get_DONE_RCV());
          $this.i1c();
          tmp = 0;
        } else {
          if (!(segment.x19(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.k1a(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.u19(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.w19(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.w19(index, null, get_INTERRUPTED_SEND())) {
              segment.k1a(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.w19(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.w19(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.t19(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.t19(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.t19(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.t19(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.j1c_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.v19(index, get_DONE_RCV());
          $this.i1c();
          tmp_0 = 0;
        } else {
          if (!(segment.x19(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.k1a(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.k3(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.a1(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.h1c();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.y19_1;
      var tmp$ret$0 = tmp0.y2(toLong(other));
      tmp = curSenders.a1(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.o1c($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().m1c(element);
        var tmp1_safe_receiver = $this.z19_1;
        tmp = tryResume0(_this__u8e3s4.n1c_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.n1c_1.n9()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.k1c(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.z19_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.n9()));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(cancellable, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.a1($this.c1b()) < 0) {
          segment.w1a();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.f1a_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.d1b()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.b1a_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.b3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.c3(toLong(other_0)).f1();
            if (!segment_0.p10_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.a1($this.c1b()) < 0) {
                segment_0.w1a();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.w1a();
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.z19_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.n9());
              cancellable.sz(element, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.w1a();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.z19_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.n9());
        cancellable.sz(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.o11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.jy();
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.p1c();
    _this__u8e3s4.r11(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.s9(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.u19(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.a1a_1.kotlinx$atomicfu$value.k3(new Long(-1, 268435455));
      if (r.a1(senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.w19(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.w19(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.s19(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.u19(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.a1a_1.kotlinx$atomicfu$value.k3(new Long(-1, 268435455));
        if (r.a1(senders) < 0) {
          if (segment.w19(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.w19(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.w19(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.s19(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.w19(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.j1c_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.v19(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.s19(index);
          } else {
            segment.v19(index, get_INTERRUPTED_SEND());
            segment.k1a(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.u1c($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.t19(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.q1c_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.g1a_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.c1a_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.b3(toLong(other));
      var s = $this.c1b();
      if (s.a1(b) <= 0) {
        if (segment.p10_1.a1(id) < 0 && !(segment.s1a() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.p10_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.c3(toLong(other_0)).f1();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.u19(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.a1($this.b1a_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.w19(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.v19(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.v19(index, get_INTERRUPTED_SEND());
            segment.k1a(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.u19(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.a1($this.b1a_1.kotlinx$atomicfu$value) < 0) {
          if (segment.w19(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.w19(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.v19(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.v19(index, get_INTERRUPTED_SEND());
              segment.k1a(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.w19(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.d1a_1.atomicfu$addAndGet$long(nAttempts).k3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.d1a_1.kotlinx$atomicfu$value.k3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.a1b_1 = $outer;
    this.y1a_1 = get_NO_RECEIVE_RESULT();
    this.z1a_1 = null;
  }
  protoOf(BufferedChannelIterator).v1c = function ($completion) {
    var tmp = new $hasNextCOROUTINE$7(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BufferedChannelIterator).r11 = function (segment, index) {
    var tmp0_safe_receiver = this.z1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r11(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).i = function () {
    var result = this.y1a_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.y1a_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.a1b_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).k1c = function (element) {
    var cont = ensureNotNull(this.z1a_1);
    this.z1a_1 = null;
    this.y1a_1 = element;
    var tmp0_safe_receiver = this.a1b_1.z19_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.n9()));
  };
  protoOf(BufferedChannelIterator).w1c = function () {
    var cont = ensureNotNull(this.z1a_1);
    this.z1a_1 = null;
    this.y1a_1 = get_CHANNEL_CLOSED();
    var cause = this.a1b_1.b1b();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.s9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.s9(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.b1b();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.j1a_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.b1b());
  }
  function markClosed($this) {
    var tmp0 = $this.a1a_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.i3(60).f1()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.k3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.k3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp0 = $this.a1a_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.k3(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.a1a_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.i3(60).f1() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.k3(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.x1c();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.z1c()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.y1c(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.g1a_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeLinkedList.<anonymous>' call
    var it = $this.e1a_1.kotlinx$atomicfu$value;
    if (it.p10_1.a1(lastSegment.p10_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeLinkedList.<anonymous>' call
    var it_0 = $this.f1a_1.kotlinx$atomicfu$value;
    if (it_0.p10_1.a1(lastSegment.p10_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.p10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.a3(toLong(other)).y2(toLong(index));
          if (globalIndex.a1($this.h1c()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.u19(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                segment.m1a();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.v1a();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.z19_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.p10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.a3(toLong(other)).y2(toLong(index));
          update_cell: while (true) {
            var state = segment.u19(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.a1($this.h1c()) < 0)
                  break process_segments;
                if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.r19(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.t19(index);
                  segment.m1a();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                    segment.m1a();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.a1($this.h1c()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.j1c_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.r19(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.t19(index);
                      segment.m1a();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.v1a();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp4 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp4);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp4);
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(it, $this);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp4);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.k() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var it_0 = list.p(i);
              resumeSenderOnCancelledChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.p10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          if (tmp0.a3(toLong(other)).y2(toLong(index)).a1(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.u19(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                segment.m1a();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.j1c_1);
                  segment.k1a(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.w19(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.k1a(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.v1a();
    }
    var tmp4 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp4);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp4);
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(it, $this);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp4);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.k() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var it_0 = list.p(i);
              resumeReceiverOnClosedChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.q1c_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.s9(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.g1c();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.s9(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp4 = _this__u8e3s4.n1c_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().a1d($this.b1b()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp4.s9(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.w1c();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.o1c($this, get_CHANNEL_CLOSED());
            } else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.i3(60).f1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.k3(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.b1d() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.k3(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.i3(60).f1();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.u19(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.w19(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.h1c());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.e1a_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.p10_1.a1(tmp1.p10_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.o1a()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.p1a()) {
                  cur.l4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.p1a()) {
                tmp1.l4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.p10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.a3(toLong(other)).a1($this.h1c()) < 0) {
        startFrom.w1a();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.p10_1.a1(id) > 0) {
        var tmp2 = segment.p10_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = tmp2.a3(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$3);
        var tmp4 = segment.p10_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (tmp4.a3(toLong(other_1)).a1($this.h1c()) < 0) {
          segment.w1a();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.f1a_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.p10_1.a1(tmp1.p10_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.o1a()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.p1a()) {
                  cur.l4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.p1a()) {
                tmp1.l4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.p10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.a3(toLong(other)).a1($this.c1b()) < 0) {
        startFrom.w1a();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp2 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = tmp2.b3(toLong(other_0));
        tmp_1 = id.a1(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp4 = $this.g1a_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            if (cur_0.p10_1.a1(segment.p10_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.o1a()) {
              break $l$block_5;
            }
            if (tmp4.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.p1a()) {
                cur_0.l4();
              }
              break $l$block_5;
            }
            if (segment.p1a()) {
              segment.l4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.p10_1.a1(id) > 0) {
        var tmp6 = segment.p10_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = tmp6.a3(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        var tmp8 = segment.p10_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (tmp8.a3(toLong(other_2)).a1($this.c1b()) < 0) {
          segment.w1a();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.g1a_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.p10_1.a1(tmp1.p10_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.o1a()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.p1a()) {
                  cur.l4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.p1a()) {
                tmp1.l4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.p10_1.a1(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.y2(toLong(1));
        var tmp2 = segment.p10_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$3 = tmp2.a3(toLong(other));
        if ($this.c1a_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          var tmp4 = segment.p10_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$4 = tmp4.a3(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.z2(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.p10_1.a1(id) < 0) {
      var tmp0_elvis_lhs = segment.s1a();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.n1a()) {
        var tmp1_elvis_lhs = segment.s1a();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.g1a_1;
      var tmp1 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var cur = tmp0.kotlinx$atomicfu$value;
          if (cur.p10_1.a1(tmp1.p10_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp1.o1a()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
            if (cur.p1a()) {
              cur.l4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp1.p1a()) {
            tmp1.l4();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.a1a_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.k3(new Long(-1, 268435455));
      if (curCounter.a1(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.i3(60).f1();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.a1a_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.b1a_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.a1(value) >= 0)
        return Unit_instance;
      if ($this.b1a_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function access$_get_sendersAndCloseStatus__tvw29s($this) {
    return $this.a1a_1;
  }
  function access$_get_sendSegment__111kgq($this) {
    return $this.e1a_1;
  }
  function access$prepareSenderForSuspension($this, $receiver, segment, index) {
    return prepareSenderForSuspension($receiver, $this, segment, index);
  }
  function access$updateCellSend($this, segment, index, element, s, waiter, closed) {
    return updateCellSend($this, segment, index, element, s, waiter, closed);
  }
  function access$_get_isClosedForSend0__sm8f7a($this, $receiver) {
    return _get_isClosedForSend0__kxgf9m($receiver, $this);
  }
  function access$findSegmentSend($this, id, startFrom) {
    return findSegmentSend($this, id, startFrom);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.z19_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.n9());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$4(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1d_1 = _this__u8e3s4;
    this.m1d_1 = element;
  }
  protoOf($sendCOROUTINE$4).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.n1d_1 = this.l1d_1;
            var tmp_1 = this;
            tmp_1.o1d_1 = this.m1d_1;
            var tmp_2 = this;
            tmp_2.p1d_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.r1d_1 = this.n1d_1;
            this.s1d_1 = this.o1d_1;
            this.t1d_1 = this.p1d_1;
            this.u1d_1 = access$_get_sendSegment__111kgq(this.r1d_1).kotlinx$atomicfu$value;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 12;
              continue $sm;
            }

            this.v1d_1 = access$_get_sendersAndCloseStatus__tvw29s(this.r1d_1).atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.w1d_1 = this.v1d_1.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
            this.x1d_1 = access$_get_isClosedForSend0__sm8f7a(this.r1d_1, this.v1d_1);
            var tmp_4 = this;
            var tmp0 = this.w1d_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.y1d_1 = tmp0.b3(toLong(other));
            var tmp_5 = this;
            var tmp2 = this.w1d_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.z1d_1 = tmp2.c3(toLong(other_0)).f1();
            if (!this.u1d_1.p10_1.equals(this.y1d_1)) {
              this.a1e_1 = access$findSegmentSend(this.r1d_1, this.y1d_1, this.u1d_1);
              if (this.a1e_1 == null) {
                if (this.x1d_1) {
                  this.h9_1 = 10;
                  suspendResult = onClosedSend(this.l1d_1, this.m1d_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.h9_1 = 2;
                  continue $sm;
                }
              } else {
                this.b1e_1 = this.a1e_1;
                this.h9_1 = 3;
                continue $sm;
              }
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 3:
            this.u1d_1 = this.b1e_1;
            this.h9_1 = 4;
            continue $sm;
          case 4:
            this.c1e_1 = access$updateCellSend(this.r1d_1, this.u1d_1, this.z1d_1, this.s1d_1, this.w1d_1, this.t1d_1, this.x1d_1);
            if (this.c1e_1 === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
              this.u1d_1.w1a();
              var tmp_6 = this;
              tmp_6.q1d_1 = Unit_instance;
              this.h9_1 = 13;
              continue $sm;
            } else {
              if (this.c1e_1 === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
                var tmp_7 = this;
                tmp_7.q1d_1 = Unit_instance;
                this.h9_1 = 13;
                continue $sm;
              } else {
                if (this.c1e_1 === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
                  if (this.x1d_1) {
                    this.u1d_1.m1a();
                    this.h9_1 = 9;
                    suspendResult = onClosedSend(this.l1d_1, this.m1d_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.h9_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.c1e_1 === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
                    if (this.w1d_1.a1(this.r1d_1.h1c()) < 0) {
                      this.u1d_1.w1a();
                    }
                    this.h9_1 = 7;
                    suspendResult = onClosedSend(this.l1d_1, this.m1d_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.c1e_1 === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
                      this.u1d_1.w1a();
                      this.h9_1 = 2;
                      continue $sm;
                    } else {
                      if (this.c1e_1 === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
                        var tmp_8 = this;
                        tmp_8.d1e_1 = this.u1d_1;
                        var tmp_9 = this;
                        tmp_9.e1e_1 = this.z1d_1;
                        var tmp_10 = this;
                        tmp_10.f1e_1 = this.s1d_1;
                        var tmp_11 = this;
                        tmp_11.g1e_1 = this.w1d_1;
                        this.h1e_1 = this.d1e_1;
                        this.i1e_1 = this.e1e_1;
                        this.j1e_1 = this.f1e_1;
                        this.k1e_1 = this.g1e_1;
                        this.h9_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.l1d_1, this.h1e_1, this.i1e_1, this.j1e_1, this.k1e_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.h9_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.h9_1 = 2;
            continue $sm;
          case 6:
            var tmp_12 = this;
            tmp_12.q1d_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 7:
            var tmp_13 = this;
            tmp_13.q1d_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 8:
            var tmp_14 = this.t1d_1;
            var tmp2_safe_receiver = (!(tmp_14 == null) ? isInterface(tmp_14, Waiter) : false) ? tmp_14 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this.r1d_1, tmp2_safe_receiver, this.u1d_1, this.z1d_1);
            }

            var tmp_15 = this;
            this.u1d_1;
            this.z1d_1;
            tmp_15.q1d_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 9:
            var tmp_16 = this;
            tmp_16.q1d_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 10:
            var tmp_17 = this;
            tmp_17.q1d_1 = Unit_instance;
            this.h9_1 = 13;
            continue $sm;
          case 11:
            throw this.k9_1;
          case 12:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 11) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1e_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$5).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            var tmp_0 = this;
            tmp_0.u1e_1 = this.t1e_1;
            var tmp_1 = this;
            tmp_1.v1e_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.x1e_1 = this.u1e_1;
            this.y1e_1 = this.v1e_1;
            this.z1e_1 = this.x1e_1.f1a_1.kotlinx$atomicfu$value;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 9;
              continue $sm;
            }

            if (this.x1e_1.d1b()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.t1e_1));
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 3:
            this.a1f_1 = this.x1e_1.b1a_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var tmp0 = this.a1f_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.b1f_1 = tmp0.b3(toLong(other));
            var tmp_4 = this;
            var tmp2 = this.a1f_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.c1f_1 = tmp2.c3(toLong(other_0)).f1();
            if (!this.z1e_1.p10_1.equals(this.b1f_1)) {
              this.d1f_1 = findSegmentReceive(this.x1e_1, this.b1f_1, this.z1e_1);
              if (this.d1f_1 == null) {
                this.h9_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.e1f_1 = this.d1f_1;
                this.h9_1 = 4;
                continue $sm;
              }
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.z1e_1 = this.e1f_1;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.f1f_1 = updateCellReceive(this.x1e_1, this.z1e_1, this.c1f_1, this.a1f_1, this.y1e_1);
            if (this.f1f_1 === get_SUSPEND()) {
              var tmp_6 = this;
              var tmp_7 = this.y1e_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.x1e_1, this.z1e_1, this.c1f_1);
              }
              this.z1e_1;
              this.c1f_1;
              this.a1f_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.f1f_1 === get_FAILED()) {
                if (this.a1f_1.a1(this.x1e_1.c1b()) < 0) {
                  this.z1e_1.w1a();
                }
                this.h9_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.f1f_1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_9 = this;
                  tmp_9.h1f_1 = this.z1e_1;
                  var tmp_10 = this;
                  tmp_10.i1f_1 = this.c1f_1;
                  var tmp_11 = this;
                  tmp_11.j1f_1 = this.a1f_1;
                  this.k1f_1 = this.h1f_1;
                  this.l1f_1 = this.i1f_1;
                  this.m1f_1 = this.j1f_1;
                  this.h9_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.t1e_1, this.k1f_1, this.l1f_1, this.m1f_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.z1e_1.w1a();
                  var tmp_13 = this.f1f_1;
                  return (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                }
              }
            }

          case 6:
            this.g1f_1 = suspendResult;
            this.h9_1 = 7;
            continue $sm;
          case 7:
            this.w1e_1 = this.g1f_1;
            this.h9_1 = 10;
            continue $sm;
          case 8:
            throw this.k9_1;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return this.w1e_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.y19_1 = capacity;
    this.z19_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.y19_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.y19_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.a1a_1 = atomic$long$1(new Long(0, 0));
    this.b1a_1 = atomic$long$1(new Long(0, 0));
    this.c1a_1 = atomic$long$1(initialBufferEnd(this.y19_1));
    this.d1a_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.e1a_1 = atomic$ref$1(firstSegment);
    this.f1a_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.g1a_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.z19_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.h1a_1 = tmp_3;
    this.i1a_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.j1a_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).c1b = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.a1a_1.kotlinx$atomicfu$value.k3(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).h1c = function () {
    return this.b1a_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).n1f = function (element, $completion) {
    var tmp = new $sendCOROUTINE$4(this, element, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BufferedChannel).o1f = function (element) {
    if (shouldSendSuspend0(this, this.a1a_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().p1f();
    var tmp2 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq(this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
        var closed = access$_get_isClosedForSend0__sm8f7a(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.b3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.c3(toLong(other_0)).f1();
        if (!segment.p10_1.equals(id)) {
          var tmp0_elvis_lhs = access$findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().a1d(this.g1c());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = access$updateCellSend(this, segment, i, element, s, tmp2, closed);
        if (tmp1_subject === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
          segment.w1a();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().m1c(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().m1c(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
          if (closed) {
            segment.m1a();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
            tmp$ret$4 = Companion_getInstance_0().a1d(this.g1c());
            break $l$block_5;
          }
          var tmp2_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            access$prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          segment.m1a();
          tmp$ret$4 = Companion_getInstance_0().p1f();
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
          if (s.a1(this.h1c()) < 0) {
            segment.w1a();
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_0().a1d(this.g1c());
          break $l$block_5;
        } else if (tmp1_subject === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
          segment.w1a();
          continue $l$loop_0;
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).p1c = function () {
  };
  protoOf(BufferedChannel).i1c = function () {
  };
  protoOf(BufferedChannel).r1f = function ($completion) {
    var tmp = new $receiveCOROUTINE$5(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(BufferedChannel).s1f = function () {
    var r = this.b1a_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.a1a_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_0().a1d(this.b1b());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.k3(new Long(-1, 268435455));
    if (r.a1(s) >= 0)
      return Companion_getInstance_0().p1f();
    var tmp2 = get_INTERRUPTED_RCV();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = this.f1a_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.d1b()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$2 = Companion_getInstance_0().a1d(this.b1b());
          break $l$block_0;
        }
        var r_0 = this.b1a_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r_0.b3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r_0.c3(toLong(other_0)).f1();
        if (!segment.p10_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp2);
        var tmp_0;
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp1_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var segm = segment;
          this.l1a(r_0);
          segm.m1a();
          tmp_0 = new ChannelResult(Companion_getInstance_0().p1f());
        } else if (updCellResult === get_FAILED()) {
          if (r_0.a1(this.c1b()) < 0) {
            segment.w1a();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.w1a();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = new ChannelResult(Companion_getInstance_0().m1c(element));
        }
        tmp$ret$2 = tmp_0.q1f_1;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).y1c = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.f1a_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.b1a_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.y19_1;
      var tmp2 = r.y2(toLong(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$1 = tmp2.a1(b) >= 0 ? tmp2 : b;
      if (globalCellIndex.a1(tmp$ret$1) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.y2(toLong(1));
      if (!this.b1a_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.b3(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.c3(toLong(other_1)).f1();
      if (!segment.p10_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (r.a1(this.c1b()) < 0) {
          segment.w1a();
        }
      } else {
        segment.w1a();
        var tmp1_safe_receiver = this.z19_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).l1a = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).a1(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.d1a_1.kotlinx$atomicfu$value.k3(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp2 = this.d1a_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp2.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$1 = cur.k3(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (tmp2.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.d1a_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.k3(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.k3(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        var tmp4 = this.d1a_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$6 = cur_0.k3(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (tmp4.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.d1a_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).g = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).b1b = function () {
    var tmp = this.i1a_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).g1c = function () {
    var tmp0_elvis_lhs = this.b1b();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).t1f = function () {
  };
  protoOf(BufferedChannel).u1f = function (cause) {
    return this.v1f(cause, false);
  };
  protoOf(BufferedChannel).ox = function (cause) {
    this.x1f(cause);
  };
  protoOf(BufferedChannel).x1f = function (cause) {
    return this.v1f(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).v1f = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.i1a_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.t1f();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).z1c = function () {
    return false;
  };
  protoOf(BufferedChannel).x1c = function () {
    return _get_isClosedForSend0__kxgf9m(this.a1a_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).d1b = function () {
    return _get_isClosedForReceive0__f7qknl(this.a1a_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).b1d = function () {
    $l$loop: while (true) {
      var segment = this.f1a_1.kotlinx$atomicfu$value;
      var r = this.h1c();
      var s = this.c1b();
      if (s.a1(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.b3(toLong(other));
      if (!segment.p10_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.f1a_1.kotlinx$atomicfu$value.p10_1.a1(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.w1a();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.c3(toLong(other_0)).f1();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.y2(toLong(1));
      this.b1a_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.a1a_1.kotlinx$atomicfu$value.i3(60).f1();
    if (tmp0_subject === 2) {
      sb.o8('closed,');
    } else if (tmp0_subject === 3) {
      sb.o8('cancelled,');
    }
    sb.o8('capacity=' + this.y19_1 + ',');
    sb.o8('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.f1a_1.kotlinx$atomicfu$value, this.e1a_1.kotlinx$atomicfu$value, this.g1a_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      if (!(element === get_NULL_SEGMENT())) {
        destination.e(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.g();
      if (!iterator.h())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.i();
      if (!iterator.h()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.p10_1;
      do {
        var e = iterator.i();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.p10_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.h1c();
    var s = this.c1b();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp5 = segment.p10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalCellIndex = tmp5.a3(toLong(other)).y2(toLong(i));
          if (globalCellIndex.a1(s) >= 0 && globalCellIndex.a1(r) >= 0)
            break append_elements;
          var cellState = segment.u19(i);
          var element_0 = segment.r19(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.a1(r) < 0 && globalCellIndex.a1(s) >= 0 ? 'receive' : globalCellIndex.a1(s) < 0 && globalCellIndex.a1(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.a1(r) < 0 && globalCellIndex.a1(s) >= 0 ? 'onReceive' : globalCellIndex.a1(s) < 0 && globalCellIndex.a1(r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.o8('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.o8(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.s1a();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.fc(sb.a() - 1 | 0);
    }
    sb.o8(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.j1c_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.j1c_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return toLong(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var token = _this__u8e3s4.mz(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.nz(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).y2(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).h3(60).y2(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.o19(), 0);
  }
  function access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn() {
    return 0;
  }
  function access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7() {
    return 1;
  }
  function access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es() {
    return 2;
  }
  function access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16() {
    return 4;
  }
  function access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr() {
    return 5;
  }
  function access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f() {
    return 3;
  }
  function access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te() {
    return new Long(-1, 268435455);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.y1f_1 = 2147483647;
    this.z1f_1 = 0;
    this.a1g_1 = -1;
    this.b1g_1 = -2;
    this.c1g_1 = -3;
    this.d1g_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.e1g_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1g_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.f1g_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.f1g_1, other.f1g_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.f1g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.f1g_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.l1c_1 = new Failed();
  }
  protoOf(Companion).m1c = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).p1f = function () {
    return _ChannelResult___init__impl__siwsuf(this.l1c_1);
  };
  protoOf(Companion).a1d = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.q1f_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.q1f_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.q1f_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.q1f_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.q1f_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().e1g_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.k1g_1 = _channel;
  }
  protoOf(ChannelCoroutine).u1f = function (cause) {
    return this.k1g_1.u1f(cause);
  };
  protoOf(ChannelCoroutine).g = function () {
    return this.k1g_1.g();
  };
  protoOf(ChannelCoroutine).r1f = function ($completion) {
    return this.k1g_1.r1f($completion);
  };
  protoOf(ChannelCoroutine).n1f = function (element, $completion) {
    return this.k1g_1.n1f(element, $completion);
  };
  protoOf(ChannelCoroutine).s1f = function () {
    return this.k1g_1.s1f();
  };
  protoOf(ChannelCoroutine).o1f = function (element) {
    return this.k1g_1.o1f(element);
  };
  protoOf(ChannelCoroutine).ox = function (cause) {
    if (this.cx())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.jw() : null, null, this);
    } else {
      tmp = cause;
    }
    this.qx(tmp);
  };
  protoOf(ChannelCoroutine).g1g = function (cause, $super) {
    return this.px(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).qx = function (cause) {
    var exception = this.hx(cause);
    this.k1g_1.ox(exception);
    this.tx(exception);
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.ox(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.y1g_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).o1f.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.z19_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().m1c(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp2 = get_BUFFERED();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.k3(access$_get_SENDERS_COUNTER_MASK_$tBufferedChannelKt_6ll4te());
        var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.b3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.c3(toLong(other_0)).f1();
        if (!segment.p10_1.equals(id)) {
          var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().a1d($this.g1c());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = access$updateCellSend($this, segment, i, element, s, tmp2, closed);
        if (tmp1_subject === access$_get_RESULT_RENDEZVOUS_$tBufferedChannelKt_ykevfn()) {
          segment.w1a();
          return Companion_getInstance_0().m1c(Unit_instance);
        } else if (tmp1_subject === access$_get_RESULT_BUFFERED_$tBufferedChannelKt_tnykj7()) {
          return Companion_getInstance_0().m1c(Unit_instance);
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_$tBufferedChannelKt_vus6es()) {
          if (closed) {
            segment.m1a();
            return Companion_getInstance_0().a1d($this.g1c());
          }
          var tmp2_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
          }
          var tmp0 = segment.p10_1;
          // Inline function 'kotlin.Long.times' call
          var other_1 = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$5 = tmp0.a3(toLong(other_1)).y2(toLong(i));
          $this.y1c(tmp$ret$5);
          return Companion_getInstance_0().m1c(Unit_instance);
        } else if (tmp1_subject === access$_get_RESULT_CLOSED_$tBufferedChannelKt_3eqb16()) {
          if (s.a1($this.h1c()) < 0) {
            segment.w1a();
          }
          return Companion_getInstance_0().a1d($this.g1c());
        } else if (tmp1_subject === access$_get_RESULT_FAILED_$tBufferedChannelKt_wacckr()) {
          segment.w1a();
          continue $l$loop_0;
        } else if (tmp1_subject === access$_get_RESULT_SUSPEND_NO_WAITER_$tBufferedChannelKt_61h09f()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$3;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.x1g_1 = capacity;
    this.y1g_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.y1g_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).va() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.x1g_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.x1g_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).z1c = function () {
    return this.y1g_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).n1f = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.z19_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.g1c());
        throw tmp1_safe_receiver;
      }
      throw this.g1c();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).o1f = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.ix(onCompletion);
    }
    coroutine.tw(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).gw = function () {
    return protoOf(ChannelCoroutine).gw.call(this);
  };
  protoOf(ProducerCoroutine).d1h = function (value) {
    this.k1g_1.w1f();
  };
  protoOf(ProducerCoroutine).hw = function (value) {
    return this.d1h(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).iw = function (cause, handled) {
    var processed = this.k1g_1.u1f(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.ew_1, cause);
    }
  };
  protoOf(ProducerCoroutine).g1g = function (cause, $super) {
    return this.px(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.e1h_1 = block;
  }
  protoOf(SafeFlow).f1h = function (collector, $completion) {
    return this.e1h_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$11(_this__u8e3s4, channel, consume, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.a1i_1) {
      // Inline function 'kotlin.check' call
      if (!!$this.b1i_1.atomicfu$getAndSet(true)) {
        // Inline function 'kotlinx.coroutines.flow.ChannelAsFlow.markConsumed.<anonymous>' call
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1i_1 = _this__u8e3s4;
    this.l1i_1 = collector;
  }
  protoOf($collectCOROUTINE$12).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (this.k1i_1.n1i_1 === -3) {
              markConsumed(this.k1i_1);
              this.h9_1 = 2;
              suspendResult = emitAllImpl(this.l1i_1, this.k1i_1.z1h_1, this.k1i_1.a1i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = protoOf(ChannelFlow).g1h.call(this.k1i_1, this.l1i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 4) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.z1h_1 = channel;
    this.a1i_1 = consume;
    this.b1i_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).p1i = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.z1h_1, this.a1i_1, $completion);
  };
  protoOf(ChannelAsFlow).q1i = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.n1i_1 === -3) {
      tmp = this.z1h_1;
    } else {
      tmp = protoOf(ChannelFlow).q1i.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).g1h = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$12(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ChannelAsFlow).r1i = function () {
    return 'channel=' + toString(this.z1h_1);
  };
  function $emitAllImplCOROUTINE$11(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1h_1 = _this__u8e3s4;
    this.q1h_1 = channel;
    this.r1h_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$11).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 9;
            ensureActive_1(this.p1h_1);
            this.s1h_1 = null;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 7;
            this.i9_1 = 6;
            this.u1h_1 = this.q1h_1.g();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            suspendResult = this.u1h_1.v1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.h9_1 = 5;
              continue $sm;
            }

            this.v1h_1 = this.u1h_1.i();
            this.h9_1 = 4;
            suspendResult = this.p1h_1.u1i(this.v1h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h9_1 = 2;
            continue $sm;
          case 5:
            this.t1h_1 = Unit_instance;
            this.i9_1 = 9;
            this.h9_1 = 8;
            continue $sm;
          case 6:
            this.i9_1 = 7;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof Error) {
              var e = this.k9_1;
              var tmp_1 = this;
              this.s1h_1 = e;
              throw e;
            } else {
              throw this.k9_1;
            }

          case 7:
            this.i9_1 = 9;
            var t = this.k9_1;
            if (this.r1h_1) {
              cancelConsumed(this.q1h_1, this.s1h_1);
            }

            throw t;
          case 8:
            this.i9_1 = 9;
            if (this.r1h_1) {
              cancelConsumed(this.q1h_1, this.s1h_1);
            }

            return Unit_instance;
          case 9:
            throw this.k9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 9) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1j_1 = _this__u8e3s4;
    this.e1j_1 = collector;
  }
  protoOf($collectCOROUTINE$13).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            var tmp_0 = this;
            tmp_0.f1j_1 = new SafeCollector(this.e1j_1, this.n9());
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 4;
            this.h9_1 = 2;
            suspendResult = this.d1j_1.f1h(this.f1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g1j_1 = suspendResult;
            this.i9_1 = 5;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 5;
            this.f1j_1.r9();
            return Unit_instance;
          case 4:
            this.i9_1 = 5;
            var t = this.k9_1;
            this.f1j_1.r9();
            throw t;
          case 5:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 5) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).g1h = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    if (!(replay >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(extraBufferCapacity >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(replay > 0 || extraBufferCapacity > 0 || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? 2147483647 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp0 = $this.u1j_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = $this.t1j_1;
    return tmp0.a1(b) <= 0 ? tmp0 : b;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.v1j_1;
    return tmp0.y2(toLong(other)).z2($this.t1j_1).f1();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.v1j_1 + $this.w1j_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.v1j_1;
    return tmp0.y2(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.v1j_1;
    var tmp2 = tmp0.y2(toLong(other));
    // Inline function 'kotlin.Long.plus' call
    var other_0 = $this.w1j_1;
    return tmp2.y2(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.y1j_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.v1j_1 >= $this.q1j_1 && $this.u1j_1.a1($this.t1j_1) <= 0) {
      switch ($this.r1j_1.s2_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.v1j_1 = $this.v1j_1 + 1 | 0;
    if ($this.v1j_1 > $this.q1j_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.p1j_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.t1j_1.y2(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.u1j_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.p1j_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.v1j_1 = $this.v1j_1 + 1 | 0;
    if ($this.v1j_1 > $this.p1j_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.v1j_1;
    tmp.u1j_1 = tmp0.y2(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.s1j_1), _get_head__d7jo8b($this), null);
    $this.v1j_1 = $this.v1j_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).y2(toLong(1));
    if ($this.t1j_1.a1(newHead) < 0)
      $this.t1j_1 = newHead;
    if ($this.u1j_1.a1(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.y1j_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.x1j_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.b1k_1.a1(new Long(0, 0)) >= 0 && element.b1k_1.a1(newHead) < 0) {
              element.b1k_1 = newHead;
            }
          }
        }
      }
    }
    $this.u1j_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.s1j_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).y2(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.also' call
    var this_0 = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.s1j_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.y2(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.y2(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.s9(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp2 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$3 = tmp2.y2(toLong(other));
      // Inline function 'kotlin.also' call
      var this_0 = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, this_0);
      $this.w1j_1 = $this.w1j_1 + 1 | 0;
      if ($this.q1j_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = this_0;
    }
    var emitter = tmp$ret$2;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
        r.s9(tmp$ret$8);
      }
    }
    return cancellable.jy();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.e1k_1.a1(_get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.s1j_1);
    if (!(getBufferAt(buffer, emitter.e1k_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.e1k_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.a1(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.a1(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.y2(new Long(1, 0));
        setBufferAt(ensureNotNull($this.s1j_1), index, null);
      }
       while (inductionVariable.a1(newHead) < 0);
    $this.t1j_1 = newReplayIndex;
    $this.u1j_1 = newMinCollectorIndex;
    $this.v1j_1 = newBufferEndIndex.z2(newHead).f1();
    $this.w1j_1 = newQueueEndIndex.z2(newBufferEndIndex).f1();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.q1j_1 === 0 && $this.w1j_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.s1j_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.w1j_1 > 0) {
        var tmp0 = _get_head__d7jo8b($this);
        // Inline function 'kotlin.Long.plus' call
        var other = _get_totalSize__xhdb3o($this);
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$1 = tmp0.y2(toLong(other)).z2(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.w1j_1 = $this.w1j_1 - 1 | 0;
      var tmp4 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = tmp4.y2(toLong(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.a1(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.b1k_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.b1k_1 = index.y2(toLong(1));
      resumes = $this.h1k(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.s9(tmp$ret$4);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.b1k_1;
    if (index.a1(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.q1j_1 > 0)
      return new Long(-1, -1);
    if (index.a1(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.w1j_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.s1j_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.f1k_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.a1(new Long(0, 0)) < 0) {
        slot.c1k_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.s9(tmp$ret$0);
        break $l$block;
      }
      slot.c1k_1 = cancellable;
    }
    return cancellable.jy();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.y1j_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.x1j_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.c1k_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).a1(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.c1k_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.d1k_1 = flow;
    this.e1k_1 = index;
    this.f1k_1 = value;
    this.g1k_1 = cont;
  }
  protoOf(Emitter).vz = function () {
    return cancelEmitter(this.d1k_1, this);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1k_1 = _this__u8e3s4;
    this.r1k_1 = collector;
  }
  protoOf($collectCOROUTINE$14).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 13;
            this.s1k_1 = this.q1k_1.w1k();
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 12;
            var tmp_0 = this.r1k_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.h9_1 = 2;
              suspendResult = this.r1k_1.z1k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.u1k_1 = this.n9().u9(Key_instance_3);
            this.h9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.h9_1 = 10;
              continue $sm;
            }

            this.h9_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.h9_1 = 8;
              continue $sm;
            }

            this.v1k_1 = tryTakeValue(this.q1k_1, this.s1k_1);
            if (!(this.v1k_1 === get_NO_VALUE())) {
              this.h9_1 = 8;
              continue $sm;
            } else {
              this.h9_1 = 6;
              continue $sm;
            }

          case 6:
            this.h9_1 = 7;
            suspendResult = awaitValue(this.q1k_1, this.s1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.h9_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.u1k_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.h9_1 = 9;
            var tmp_2 = this.v1k_1;
            suspendResult = this.r1k_1.u1i((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.h9_1 = 4;
            continue $sm;
          case 10:
            this.t1k_1 = Unit_instance;
            this.i9_1 = 13;
            this.h9_1 = 11;
            continue $sm;
          case 11:
            this.i9_1 = 13;
            this.q1k_1.a1l(this.s1k_1);
            return Unit_instance;
          case 12:
            this.i9_1 = 13;
            var t = this.k9_1;
            this.q1k_1.a1l(this.s1k_1);
            throw t;
          case 13:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 13) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.p1j_1 = replay;
    this.q1j_1 = bufferCapacity;
    this.r1j_1 = onBufferOverflow;
    this.s1j_1 = null;
    this.t1j_1 = new Long(0, 0);
    this.u1j_1 = new Long(0, 0);
    this.v1j_1 = 0;
    this.w1j_1 = 0;
  }
  protoOf(SharedFlowImpl).b1l = function () {
    var tmp = ensureNotNull(this.s1j_1);
    var tmp0 = this.t1j_1;
    // Inline function 'kotlin.Long.plus' call
    var other = _get_replaySize__dxgnb1(this);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$1 = tmp0.y2(toLong(other)).z2(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).c1l = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SharedFlowImpl).g1h = function (collector, $completion) {
    return this.c1l(collector, $completion);
  };
  protoOf(SharedFlowImpl).d1l = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.s9(tmp$ret$3);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).u1i = function (value, $completion) {
    if (this.d1l(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).e1l = function () {
    var index = this.t1j_1;
    if (index.a1(this.u1j_1) < 0)
      this.u1j_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).h1k = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.a1(this.u1j_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.v1j_1;
    var newMinCollectorIndex = head.y2(toLong(other));
    if (this.q1j_1 === 0 && this.w1j_1 > 0) {
      newMinCollectorIndex = newMinCollectorIndex.d3();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.y1j_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.x1j_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.b1k_1.a1(new Long(0, 0)) >= 0 && element.b1k_1.a1(newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.b1k_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.a1(this.u1j_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.y1j_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.z2(newMinCollectorIndex).f1();
      var tmp4 = this.w1j_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.q1j_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp4, b);
    } else {
      tmp = this.w1j_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp6 = newBufferEndIndex;
    // Inline function 'kotlin.Long.plus' call
    var other_0 = this.w1j_1;
    var newQueueEndIndex = tmp6.y2(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.s1j_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.a1(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.y2(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.g1k_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.f1k_1);
            newBufferEndIndex = newBufferEndIndex.d3();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.a1(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.z2(head).f1();
    if (this.y1j_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp13 = this.t1j_1;
    var tmp11 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = this.p1j_1;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = Math.min(a, newBufferSize1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = tmp11.z2(toLong(other_1));
    var newReplayIndex = tmp13.a1(b_0) >= 0 ? tmp13 : b_0;
    if (this.q1j_1 === 0 && newReplayIndex.a1(newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.s1j_1), newReplayIndex), get_NO_VALUE())) {
      newBufferEndIndex = newBufferEndIndex.d3();
      newReplayIndex = newReplayIndex.d3();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).f1l = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).g1l = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.b1k_1 = new Long(-1, -1);
    this.c1k_1 = null;
  }
  protoOf(SharedFlowSlot).h1l = function (flow) {
    if (this.b1k_1.a1(new Long(0, 0)) >= 0)
      return false;
    this.b1k_1 = flow.e1l();
    return true;
  };
  protoOf(SharedFlowSlot).i1l = function (flow) {
    return this.h1l(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).j1l = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.b1k_1;
    this.b1k_1 = new Long(-1, -1);
    this.c1k_1 = null;
    return flow.h1k(oldIndex);
  };
  protoOf(SharedFlowSlot).k1l = function (flow) {
    return this.j1l(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f1() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.f1() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.p1l_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.p1l_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.q1l_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.q1l_1 = curSequence;
    } else {
      $this.q1l_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.x1j_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.s1l();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.q1l_1 === curSequence) {
        $this.q1l_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.q1l_1;
      curSlots = $this.x1j_1;
    }
  }
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1m_1 = _this__u8e3s4;
    this.c1m_1 = collector;
  }
  protoOf($collectCOROUTINE$15).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 12;
            this.d1m_1 = this.b1m_1.w1k();
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 11;
            var tmp_0 = this.c1m_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.h9_1 = 2;
              suspendResult = this.c1m_1.z1k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 3;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.f1m_1 = this.n9().u9(Key_instance_3);
            this.g1m_1 = null;
            this.h9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.h1m_1 = this.b1m_1.p1l_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.f1m_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.g1m_1 == null || !equals(this.g1m_1, this.h1m_1)) {
              this.h9_1 = 5;
              var tmp0 = get_NULL();
              var value = this.h1m_1;
              var tmp_2;
              if (value === tmp0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.c1m_1.u1i(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 6;
              continue $sm;
            }

          case 5:
            this.g1m_1 = this.h1m_1;
            this.h9_1 = 6;
            continue $sm;
          case 6:
            if (!this.d1m_1.j1m()) {
              this.h9_1 = 7;
              suspendResult = this.d1m_1.i1m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 8;
              continue $sm;
            }

          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.h9_1 = 4;
            continue $sm;
          case 9:
            this.e1m_1 = Unit_instance;
            this.i9_1 = 12;
            this.h9_1 = 10;
            continue $sm;
          case 10:
            this.i9_1 = 12;
            this.b1m_1.a1l(this.d1m_1);
            return Unit_instance;
          case 11:
            this.i9_1 = 12;
            var t = this.k9_1;
            this.b1m_1.a1l(this.d1m_1);
            throw t;
          case 12:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 12) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.p1l_1 = atomic$ref$1(initialState);
    this.q1l_1 = 0;
  }
  protoOf(StateFlowImpl).k1m = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).v = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.p1l_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === tmp0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).l1m = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).d1l = function (value) {
    this.k1m(value);
    return true;
  };
  protoOf(StateFlowImpl).u1i = function (value, $completion) {
    this.k1m(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).c1l = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$15(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(StateFlowImpl).g1h = function (collector, $completion) {
    return this.c1l(collector, $completion);
  };
  protoOf(StateFlowImpl).f1l = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).g1l = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.r1l_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).m1m = function (flow) {
    if (!(this.r1l_1.kotlinx$atomicfu$value == null))
      return false;
    this.r1l_1.kotlinx$atomicfu$value = get_NONE();
    return true;
  };
  protoOf(StateFlowSlot).i1l = function (flow) {
    return this.m1m(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).n1m = function (flow) {
    this.r1l_1.kotlinx$atomicfu$value = null;
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).k1l = function (flow) {
    return this.n1m(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).s1l = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.r1l_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.r1l_1.atomicfu$compareAndSet(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.r1l_1.atomicfu$compareAndSet(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.s9(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).j1m = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.r1l_1.atomicfu$getAndSet(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).i1m = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.r1l_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.s9(tmp$ret$1);
    }
    return cancellable.jy();
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.x1j_1 = null;
    this.y1j_1 = 0;
    this.z1j_1 = 0;
    this.a1k_1 = null;
  }
  protoOf(AbstractSharedFlow).w1k = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.x1j_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.g1l(2);
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.x1j_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.y1j_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.x1j_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.z1j_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.f1l();
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).i1l(this))
        break $l$loop;
    }
    this.z1j_1 = index;
    this.y1j_1 = this.y1j_1 + 1 | 0;
    subscriptionCount = this.a1k_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.a1n(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).a1l = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.y1j_1 = this.y1j_1 - 1 | 0;
    subscriptionCount = this.a1k_1;
    if (this.y1j_1 === 0)
      this.z1j_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).k1l(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.s9(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.a1n(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.j1n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).l1n = function (it, $completion) {
    var tmp = this.m1n(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ba = function (p1, $completion) {
    return this.l1n((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.j1n_1.p1i(this.k1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).m1n = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.j1n_1, completion);
    i.k1n_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.l1n(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.v1n_1 = $collector;
    this.w1n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).y1n = function ($this$coroutineScope, $completion) {
    var tmp = this.z1n($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ChannelFlow$collect$slambda).ba = function (p1, $completion) {
    return this.y1n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = emitAll(this.v1n_1, this.w1n_1.q1i(this.x1n_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$collect$slambda).z1n = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.v1n_1, this.w1n_1, completion);
    i.x1n_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1n($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.m1i_1 = context;
    this.n1i_1 = capacity;
    this.o1i_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).s1i = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).t1i = function () {
    return this.n1i_1 === -3 ? -2 : this.n1i_1;
  };
  protoOf(ChannelFlow).q1i = function (scope) {
    return produce(scope, this.m1i_1, this.t1i(), this.o1i_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.s1i());
  };
  protoOf(ChannelFlow).g1h = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).r1i = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.r1i();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.e(tmp0_safe_receiver);
    }
    if (!(this.m1i_1 === EmptyCoroutineContext_getInstance())) {
      props.e('context=' + toString(this.m1i_1));
    }
    if (!(this.n1i_1 === -3)) {
      props.e('capacity=' + this.n1i_1);
    }
    if (!this.o1i_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.e('onBufferOverflow=' + this.o1i_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.qh(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.j1j_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.i1j_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.zw();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.u();
      var collectElement = $this_checkContext.i1j_1.u9(key);
      var tmp;
      if (!(key === Key_instance_3)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.a1o_1 = channel;
  }
  protoOf(SendingCollector).u1i = function (value, $completion) {
    return this.a1o_1.n1f(value, $completion);
  };
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.b1o_1;
  }
  function ThrowingCollector() {
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function $onSubscriptionCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1o_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$21).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 7;
            var tmp_0 = this;
            tmp_0.l1o_1 = new SafeCollector(this.k1o_1.x1k_1, this.n9());
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 6;
            this.h9_1 = 2;
            suspendResult = this.k1o_1.y1k_1(this.l1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m1o_1 = suspendResult;
            this.i9_1 = 7;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 7;
            this.l1o_1.r9();
            var tmp_1 = this.k1o_1.x1k_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.h9_1 = 4;
              suspendResult = this.k1o_1.x1k_1.z1k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            this.i9_1 = 7;
            var t = this.k9_1;
            this.l1o_1.r9();
            throw t;
          case 7:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 7) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).z1k = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$21(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function $collectCOROUTINE$22(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1o_1 = _this__u8e3s4;
    this.w1o_1 = collector;
  }
  protoOf($collectCOROUTINE$22).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.v1o_1.y1o_1.c1l(this.w1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function ReadonlyStateFlow(flow, job) {
    this.x1o_1 = job;
    this.y1o_1 = flow;
  }
  protoOf(ReadonlyStateFlow).v = function () {
    return this.y1o_1.v();
  };
  protoOf(ReadonlyStateFlow).c1l = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$22(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ReadonlyStateFlow).g1h = function (collector, $completion) {
    return this.c1l(collector, $completion);
  };
  function asSharedFlow(_this__u8e3s4) {
    return new ReadonlySharedFlow(_this__u8e3s4, null);
  }
  function $collectCOROUTINE$23(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1p_1 = _this__u8e3s4;
    this.i1p_1 = collector;
  }
  protoOf($collectCOROUTINE$23).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.h1p_1.k1p_1.c1l(this.i1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function ReadonlySharedFlow(flow, job) {
    this.j1p_1 = job;
    this.k1p_1 = flow;
  }
  protoOf(ReadonlySharedFlow).c1l = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$23(this, collector, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ReadonlySharedFlow).g1h = function (collector, $completion) {
    return this.c1l(collector, $completion);
  };
  function OpDescriptor() {
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.p10_1 = id;
    this.q10_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).n1a = function () {
    return this.q10_1.kotlinx$atomicfu$value === this.p19() && !this.u1a();
  };
  protoOf(Segment).o1a = function () {
    var tmp0 = this.q10_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.p19()) || this.u1a())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).p1a = function () {
    return this.q10_1.atomicfu$addAndGet(-65536) === this.p19() && !this.u1a();
  };
  protoOf(Segment).m1a = function () {
    if (this.q10_1.atomicfu$incrementAndGet() === this.p19()) {
      this.l4();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.x1a())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.c1d_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.c1d_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.c1d_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.c1d_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.c1d_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.q1a_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.v1a();
    while (!(cur === null) && cur.n1a())
      cur = cur.r1a_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.s1a());
    while (cur.n1a()) {
      var tmp0_elvis_lhs = cur.s1a();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.q1a_1 = atomic$ref$1(null);
    this.r1a_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).s1a = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).t1a = function (value) {
    return this.q1a_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).u1a = function () {
    return this.s1a() == null;
  };
  protoOf(ConcurrentLinkedListNode).v1a = function () {
    return this.r1a_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).w1a = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.r1a_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).x1a = function () {
    return this.q1a_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).l4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.u1a())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.r1a_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.q1a_1.kotlinx$atomicfu$value = next;
      if (next.n1a() && !next.u1a())
        continue $l$loop_0;
      if (!(prev === null) && prev.n1a())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.p10_1.a1(id) < 0 || cur.n1a()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.p10_1.y2(toLong(1)), cur);
      if (cur.t1a(newTail)) {
        if (cur.n1a()) {
          cur.l4();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().g();
    while (tmp0_iterator.h()) {
      var handler = tmp0_iterator.i();
      try {
        handler.s12(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.b10_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.xz_1 = dispatcher;
    this.yz_1 = continuation;
    this.zz_1 = get_UNDEFINED();
    this.a10_1 = threadContextElements(this.n9());
    this.b10_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).n9 = function () {
    return this.yz_1.n9();
  };
  protoOf(DispatchedContinuation).k10 = function () {
    return !(this.b10_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).l1p = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).r12 = function () {
    this.l1p();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g11();
    }
  };
  protoOf(DispatchedContinuation).c10 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.b10_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.b10_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).q11 = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.b10_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.b10_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).m10 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b10_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.b10_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.b10_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).j11 = function () {
    var state = this.zz_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.zz_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).h11 = function () {
    return this;
  };
  protoOf(DispatchedContinuation).s9 = function (result) {
    var context = this.yz_1.n9();
    var state = toState_0(result);
    if (this.xz_1.o12(context)) {
      this.zz_1 = state;
      this.l10_1 = 0;
      this.xz_1.p12(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().i13();
        if (false && eventLoop.d13()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.c13()) {
          this.zz_1 = state;
          this.l10_1 = 0;
          eventLoop.b13(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.e13(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            this.n9();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.a10_1;
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>.<anonymous>' call
            this.yz_1.s9(result);
            $l$loop: while (eventLoop.a13()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.v11(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.f13(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).k11 = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.m12_1(cause);
    }
  };
  protoOf(DispatchedContinuation).h19 = function (context, value) {
    this.zz_1 = value;
    this.l10_1 = 1;
    this.xz_1.q12(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.xz_1.toString() + ', ' + toDebugString(this.yz_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.xz_1.o12(_this__u8e3s4.n9())) {
        _this__u8e3s4.zz_1 = state;
        _this__u8e3s4.l10_1 = 1;
        _this__u8e3s4.xz_1.p12(_this__u8e3s4.n9(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().i13();
          if (false && eventLoop.d13()) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.c13()) {
            _this__u8e3s4.zz_1 = state;
            _this__u8e3s4.l10_1 = 1;
            eventLoop.b13(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.e13(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.n9().u9(Key_instance_3);
                if (!(job == null) && !job.gw()) {
                  var cause = job.fx();
                  _this__u8e3s4.k11(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.s9(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.yz_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.a10_1;
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
                _this__u8e3s4.yz_1.s9(result);
              }
              $l$loop: while (eventLoop.a13()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.v11(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.f13(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.s9(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().i13();
      if (true && eventLoop.d13()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.c13()) {
        _this__u8e3s4.zz_1 = Unit_instance;
        _this__u8e3s4.l10_1 = 1;
        eventLoop.b13(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.e13(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.u11();
          $l$loop: while (eventLoop.a13()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.v11(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.f13(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.l10_1 = resumeMode;
  }
  protoOf(DispatchedTask).k11 = function (takenState, cause) {
  };
  protoOf(DispatchedTask).p11 = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).s11 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lw_1;
  };
  protoOf(DispatchedTask).u11 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.h11();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.yz_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.a10_1;
      // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
      var context = continuation.n9();
      var state = this.j11();
      var exception = this.s11(state);
      var job = exception == null && get_isCancellableMode(this.l10_1) ? context.u9(Key_instance_3) : null;
      if (!(job == null) && !job.gw()) {
        var cause = job.fx();
        this.k11(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.s9(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.s9(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.p11(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.s9(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlinx.coroutines.afterTask' call
        // Inline function 'kotlin.Companion.success' call
        tmp_0 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.v11(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).v11 = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return Unit_instance;
    if (!(exception === null) && !(finallyException === null)) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.h11().n9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.h11();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.l10_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.xz_1;
      var context = delegate.n9();
      if (dispatcher.o12(context)) {
        dispatcher.p12(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().i13();
    if (eventLoop.c13()) {
      eventLoop.b13(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.e13(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.h11(), true);
        $l$loop: while (eventLoop.a13()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.v11(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.f13(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.j11();
    var exception = _this__u8e3s4.s11(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.p11(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.yz_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.a10_1;
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith.<anonymous>' call
      this_0.yz_1.s9(result);
    } else {
      delegate.s9(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).e(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.e((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.e(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.coroutines.internal.callUndeliveredElement.<anonymous>' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_instance;
    };
  }
  function ContextScope(context) {
    this.m1p_1 = context;
  }
  protoOf(ContextScope).fw = function () {
    return this.m1p_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.m1p_1) + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uy_1 = uCont;
  }
  protoOf(ScopeCoroutine).yx = function () {
    return true;
  };
  protoOf(ScopeCoroutine).qw = function (state) {
    resumeCancellableWith(intercepted(this.uy_1), recoverResult(state, this.uy_1));
  };
  protoOf(ScopeCoroutine).pw = function (state) {
    this.uy_1.s9(recoverResult(state, this.uy_1));
  };
  function Symbol(symbol) {
    this.n1p_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.n1p_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).f1();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.a1(parsed) <= 0 ? parsed.a1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.s9(tmp$ret$0);
    throw e;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.ow(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.lw_1;
        if (true) {
          throw recoverStackTrace(state.lw_1, _this__u8e3s4.uy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.lw_1, _this__u8e3s4.uy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.ow(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var e_0 = state.lw_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.n18_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.lw_1, _this__u8e3s4.uy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.lw_1, _this__u8e3s4.uy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.n9();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.s9(tmp$ret$5);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$8 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.s9(tmp$ret$8);
      }
    }
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.r1c_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.s1p($this, internalResult);
        if ($this.r1c_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.t1c_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.t1c_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.r1c_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.r1c_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.s1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.p1p_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).s1p = function (select, internalResult) {
    var tmp0_safe_receiver = this.r1p_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.q1p_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).u1c = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.mz(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.nz(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (it) {
      this$0.e1q_1.kotlinx$atomicfu$value = this$1.h1q_1;
      this$0.v1p(this$1.h1q_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.v1p(this$1.h1q_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.j1q())
        return 0;
      var curOwner = $this.e1q_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.o11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.jy();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.r1q()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.e1q_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.i1q_1 = $outer;
    this.g1q_1 = cont;
    this.h1q_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).n9 = function () {
    return this.g1q_1.n9();
  };
  protoOf(CancellableContinuationWithOwner).oz = function (cause) {
    return this.g1q_1.oz(cause);
  };
  protoOf(CancellableContinuationWithOwner).nz = function (token) {
    this.g1q_1.nz(token);
  };
  protoOf(CancellableContinuationWithOwner).qz = function (handler) {
    this.g1q_1.qz(handler);
  };
  protoOf(CancellableContinuationWithOwner).lg = function (result) {
    this.g1q_1.s9(result);
  };
  protoOf(CancellableContinuationWithOwner).s9 = function (result) {
    return this.lg(result);
  };
  protoOf(CancellableContinuationWithOwner).s1q = function (_this__u8e3s4, value) {
    this.g1q_1.rz(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).rz = function (_this__u8e3s4, value) {
    return this.s1q(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).r11 = function (segment, index) {
    this.g1q_1.r11(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).t1q = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.g1q_1.mz(Unit_instance, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.i1q_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.i1q_1.e1q_1.kotlinx$atomicfu$value = this.h1q_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).mz = function (value, idempotent, onCancellation) {
    return this.t1q(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).u1q = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.i1q_1.e1q_1.kotlinx$atomicfu$value = this.h1q_1;
    this.g1q_1.sz(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.i1q_1, this));
  };
  protoOf(CancellableContinuationWithOwner).sz = function (value, onCancellation) {
    return this.u1q(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (it) {
      this$0.v1p($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, owner, _anonymous_parameter_2__qggqfi) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreImpl.call(this, 1, locked ? 1 : 0);
    this.e1q_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.f1q_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).j1q = function () {
    return this.v1q() === 0;
  };
  protoOf(MutexImpl).t1p = function (owner, $completion) {
    if (this.w1q(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).w1q = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).v1p = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.j1q()) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.e1q_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.e1q_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.x1q();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.j1q() + ',owner=' + toString_0(this.e1q_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.p1q_1.atomicfu$getAndDecrement();
      if (p > $this.k1q_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.p1q_1.kotlinx$atomicfu$value;
      if (cur <= $this.k1q_1)
        break $l$loop_0;
      if ($this.p1q_1.atomicfu$compareAndSet(cur, $this.k1q_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.n1q_1.kotlinx$atomicfu$value;
    var enqIdx = $this.o1q_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp2 = $this.n1q_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp3 = enqIdx.b3(toLong(other));
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp3, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp2.kotlinx$atomicfu$value;
              if (cur.p10_1.a1(tmp1.p10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.o1a()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.p1a()) {
                  cur.l4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.p1a()) {
                tmp1.l4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = enqIdx.c3(toLong(other_0)).f1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.c1r_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.r11(segment, i);
      return true;
    }
    var tmp14 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.c1r_1.atomicfu$get(i).atomicfu$compareAndSet(tmp14, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.sz(Unit_instance, $this.q1q_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.o1p(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.l1q_1.kotlinx$atomicfu$value;
    var deqIdx = $this.m1q_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.b3(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp2 = $this.l1q_1;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = tmp2.kotlinx$atomicfu$value;
              if (cur.p10_1.a1(tmp1.p10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.o1a()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.p1a()) {
                  cur.l4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.p1a()) {
                tmp1.l4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    segment.w1a();
    if (segment.p10_1.a1(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.c3(toLong(other_0)).f1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.c1r_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.tryResumeNextFromQueue.<anonymous>' call
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.c1r_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp15 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.c1r_1.atomicfu$get(i).atomicfu$compareAndSet(tmp15, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire(cellState, $this);
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.mz(Unit_instance, null, $this.q1q_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.nz(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.o1c($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.x1q();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.k1q_1 = permits;
    this.m1q_1 = atomic$long$1(new Long(0, 0));
    this.o1q_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.k1q_1 > 0)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message = 'Semaphore should have at least 1 permit, but had ' + this.k1q_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.k1q_1 : false)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message_0 = 'The number of acquired permits should be in 0..' + this.k1q_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.l1q_1 = atomic$ref$1(s);
    this.n1q_1 = atomic$ref$1(s);
    this.p1q_1 = atomic$int$1(this.k1q_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.q1q_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreImpl).v1q = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.p1q_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreImpl).r1q = function () {
    $l$loop: while (true) {
      var p = this.p1q_1.kotlinx$atomicfu$value;
      if (p > this.k1q_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.p1q_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
          waiter.sz(Unit_instance, this.q1q_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).x1q = function () {
    while (true) {
      var p = this.p1q_1.atomicfu$getAndIncrement();
      if (p >= this.k1q_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.k1q_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.c1r_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).p19 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).r10 = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.c1r_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.m1a();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.p10_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().b18_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.fw().rh(context);
    return !(combined === Dispatchers_getInstance().b18_1) && combined.u9(Key_instance) == null ? combined.rh(Dispatchers_getInstance().b18_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.rh(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).pw = function (state) {
    return this.uy_1.s9(recoverResult(state, this.uy_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).va();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).j1r = function () {
    process.nextTick(this.q1r_1.o1r_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.u1r();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.n1r_1 = dispatcher;
    var tmp = this;
    tmp.o1r_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).v1r = function () {
    this.n1r_1.j1r();
  };
  protoOf(ScheduledMessageQueue).w1r = function () {
    setTimeout(this.o1r_1, 0);
  };
  protoOf(ScheduledMessageQueue).x1r = function (timeout) {
    setTimeout(this.o1r_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.m1s_1 && event.data == this$0.n1s_1) {
        event.stopPropagation();
        this$0.u1r();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.u1r();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.m1s_1 = window_0;
    this.n1s_1 = 'dispatchCoroutine';
    this.m1s_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).v1r = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).w1r = function () {
    this.m1s_1.postMessage(this.n1s_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.i11();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.jy();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.s9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.s9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.b18_1 = createDefaultDispatcher();
    this.c18_1 = Unconfined_getInstance();
    this.d18_1 = new JsMainDispatcher(this.b18_1, false);
    this.e18_1 = null;
  }
  protoOf(Dispatchers).f18 = function () {
    var tmp0_elvis_lhs = this.e18_1;
    return tmp0_elvis_lhs == null ? this.d18_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.p1s_1 = delegate;
    this.q1s_1 = invokeImmediately;
    this.r1s_1 = this.q1s_1 ? this : new JsMainDispatcher(this.p1s_1, true);
  }
  protoOf(JsMainDispatcher).z17 = function () {
    return this.r1s_1;
  };
  protoOf(JsMainDispatcher).o12 = function (context) {
    return !this.q1s_1;
  };
  protoOf(JsMainDispatcher).p12 = function (context, block) {
    return this.p1s_1.p12(context, block);
  };
  protoOf(JsMainDispatcher).q12 = function (context, block) {
    return this.p1s_1.q12(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.a18();
    return tmp0_elvis_lhs == null ? this.p1s_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).p12 = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.w1s_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.w1s_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.w1s_1, this.w1s_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.w1s_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return TaskContext_instance;
  }
  function TaskContext() {
  }
  var TaskContext_instance;
  function TaskContext_getInstance() {
    return TaskContext_instance;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.h1j_1 = collector;
    this.i1j_1 = collectContext;
    var tmp = this;
    tmp.j1j_1 = this.i1j_1.qh(0, SafeCollector$collectContextSize$lambda);
    this.k1j_1 = null;
  }
  protoOf(SafeCollector).u1i = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.n9();
    ensureActive(currentContext);
    if (!(this.k1j_1 === currentContext)) {
      checkContext(this, currentContext);
      this.k1j_1 = currentContext;
    }
    return this.h1j_1.u1i(value, $completion);
  };
  protoOf(SafeCollector).r9 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).j1r = function () {
    this.q1r_1.x1r(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.u11();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.coroutines.SetTimeoutBasedDispatcher.scheduleResumeAfterDelay.<anonymous>.<anonymous>' call
      $continuation.rz(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.q1r_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).p12 = function (context, block) {
    this.q1r_1.i1s(block);
  };
  protoOf(SetTimeoutBasedDispatcher).u12 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).t12 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ClearTimeout(handle);
    continuation.qz(tmp$ret$1);
  };
  function MessageQueue() {
    this.r1r_1 = ArrayDeque_init_$Create$();
    this.s1r_1 = 16;
    this.t1r_1 = false;
  }
  protoOf(MessageQueue).k = function () {
    return this.r1r_1.bf_1;
  };
  protoOf(MessageQueue).y1r = function (index, element) {
    this.r1r_1.h2(index, element);
  };
  protoOf(MessageQueue).h2 = function (index, element) {
    return this.y1r(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).z1r = function (element) {
    return this.r1r_1.e(element);
  };
  protoOf(MessageQueue).e = function (element) {
    return this.z1r((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).a1s = function (index, elements) {
    return this.r1r_1.e2(index, elements);
  };
  protoOf(MessageQueue).e2 = function (index, elements) {
    return this.a1s(index, elements);
  };
  protoOf(MessageQueue).b1s = function (elements) {
    return this.r1r_1.o(elements);
  };
  protoOf(MessageQueue).o = function (elements) {
    return this.b1s(elements);
  };
  protoOf(MessageQueue).f2 = function () {
    this.r1r_1.f2();
  };
  protoOf(MessageQueue).c1s = function (element) {
    return this.r1r_1.j(element);
  };
  protoOf(MessageQueue).j = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.c1s((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).d1s = function (elements) {
    return this.r1r_1.y1(elements);
  };
  protoOf(MessageQueue).y1 = function (elements) {
    return this.d1s(elements);
  };
  protoOf(MessageQueue).p = function (index) {
    return this.r1r_1.p(index);
  };
  protoOf(MessageQueue).e1s = function (element) {
    return this.r1r_1.r(element);
  };
  protoOf(MessageQueue).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.e1s((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).q = function () {
    return this.r1r_1.q();
  };
  protoOf(MessageQueue).g = function () {
    return this.r1r_1.g();
  };
  protoOf(MessageQueue).f1s = function (element) {
    return this.r1r_1.z1(element);
  };
  protoOf(MessageQueue).z1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.f1s((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).b2 = function (index) {
    return this.r1r_1.b2(index);
  };
  protoOf(MessageQueue).g1s = function (element) {
    return this.r1r_1.d2(element);
  };
  protoOf(MessageQueue).d2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.g1s((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).i2 = function (index) {
    return this.r1r_1.i2(index);
  };
  protoOf(MessageQueue).h1s = function (index, element) {
    return this.r1r_1.g2(index, element);
  };
  protoOf(MessageQueue).g2 = function (index, element) {
    return this.h1s(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).c2 = function (fromIndex, toIndex) {
    return this.r1r_1.c2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).i1s = function (element) {
    this.z1r(element);
    if (!this.t1r_1) {
      this.t1r_1 = true;
      this.v1r();
    }
  };
  protoOf(MessageQueue).u1r = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.s1r_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.u11();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.t1r_1 = false;
      } else {
        this.w1r();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.a1t_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).vz = function () {
    w3cClearTimeout(this.a1t_1.c1t_1, this.e1t_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlinx.coroutines.WindowDispatcher.scheduleResumeAfterDelay.<anonymous>.<anonymous>' call
      $continuation.rz(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function Runnable$run$ref($boundThis) {
    var l = function () {
      $boundThis.u11();
      return Unit_instance;
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.c1t_1 = window_0;
    this.d1t_1 = new WindowMessageQueue(this.c1t_1);
  }
  protoOf(WindowDispatcher).p12 = function (context, block) {
    return this.d1t_1.i1s(block);
  };
  protoOf(WindowDispatcher).t12 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.c1t_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new WindowClearTimeout(this, handle);
    continuation.qz(tmp$ret$1);
  };
  protoOf(WindowDispatcher).u12 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.c1t_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).f1();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.e1t_1 = handle;
  }
  protoOf(ClearTimeout).vz = function () {
    w3cClearTimeout_0(this.e1t_1);
  };
  protoOf(ClearTimeout).uz = function (cause) {
    this.vz();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.uz(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.e1t_1 + ']';
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).z13 = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.t13_1 = this;
    this.u13_1 = this;
    this.v13_1 = false;
  }
  protoOf(LinkedListNode).a14 = function (node) {
    var prev = this.u13_1;
    node.t13_1 = this;
    node.u13_1 = prev;
    prev.t13_1 = node;
    this.u13_1 = node;
  };
  protoOf(LinkedListNode).z13 = function () {
    return this.b14();
  };
  protoOf(LinkedListNode).vz = function () {
    this.z13();
  };
  protoOf(LinkedListNode).b14 = function () {
    if (this.v13_1)
      return false;
    var prev = this.u13_1;
    var next = this.t13_1;
    prev.t13_1 = next;
    next.u13_1 = prev;
    this.v13_1 = true;
    return true;
  };
  protoOf(LinkedListNode).h14 = function (node) {
    if (!(this.t13_1 === this))
      return false;
    this.a14(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.j13_1 = null;
  }
  protoOf(CommonThreadLocal).k13 = function () {
    var tmp = this.j13_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).l13 = function (value) {
    this.j13_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).kx = invokeOnCompletion$default;
  protoOf(JobSupport).px = cancel$default;
  protoOf(JobSupport).rh = plus;
  protoOf(JobSupport).u9 = get_0;
  protoOf(JobSupport).qh = fold;
  protoOf(JobSupport).ph = minusKey_0;
  protoOf(CancellableContinuationImpl).pz = cancel$default_0;
  protoOf(CoroutineDispatcher).u9 = get;
  protoOf(CoroutineDispatcher).ph = minusKey;
  protoOf(BufferedChannel).w1f = close$default;
  protoOf(ChannelCoroutine).w1f = close$default;
  protoOf(CancellableContinuationWithOwner).pz = cancel$default_0;
  protoOf(MutexImpl).u1p = lock$default;
  protoOf(MutexImpl).w1p = unlock$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  TaskContext_instance = new TaskContext();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_LAZY_getInstance;
  _.$_$.c = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.d = await_0;
  _.$_$.e = cancelAndJoin;
  _.$_$.f = coroutineScope;
  _.$_$.g = delay;
  _.$_$.h = supervisorScope;
  _.$_$.i = withContext;
  _.$_$.j = withTimeoutOrNull;
  _.$_$.k = yield_0;
  _.$_$.l = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.m = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.n = Key_instance_1;
  _.$_$.o = Key_instance_2;
  _.$_$.p = Dispatchers_getInstance;
  _.$_$.q = Key_instance_3;
  _.$_$.r = ChannelResult;
  _.$_$.s = Channel;
  _.$_$.t = cancelConsumed;
  _.$_$.u = FlowCollector;
  _.$_$.v = MutableSharedFlow;
  _.$_$.w = MutableStateFlow;
  _.$_$.x = asSharedFlow;
  _.$_$.y = asStateFlow;
  _.$_$.z = flow;
  _.$_$.a1 = receiveAsFlow;
  _.$_$.b1 = Mutex_0;
  _.$_$.c1 = CancellableContinuationImpl;
  _.$_$.d1 = CompletableDeferred;
  _.$_$.e1 = CoroutineDispatcher;
  _.$_$.f1 = CoroutineScope_0;
  _.$_$.g1 = CoroutineScope;
  _.$_$.h1 = invokeOnTimeout;
  _.$_$.i1 = Delay;
  _.$_$.j1 = Job_0;
  _.$_$.k1 = Runnable;
  _.$_$.l1 = SupervisorJob;
  _.$_$.m1 = async;
  _.$_$.n1 = cancel;
  _.$_$.o1 = cancel_0;
  _.$_$.p1 = get_isActive_0;
  _.$_$.q1 = get_isActive;
  _.$_$.r1 = get_job;
  _.$_$.s1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
